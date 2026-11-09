import { writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.DESIGN_SYSTEM_URL ?? "http://localhost:3123";
const route = process.env.DESIGN_SYSTEM_ROUTE ?? "/design-system";
const outputPath = path.resolve(process.env.DESIGN_SYSTEM_OUT ?? "design-system.html");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});

await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
// A cold route compiles on first visit, and its CSS chunk may not exist until
// then. Without the reload the export silently loses page-level @font-face
// rules and every specimen renders in the layout font.
await page.reload({ waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1200);

const html = await page.evaluate(async () => {
  const asDataUrl = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) return null;
      const blob = await response.blob();
      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      });
    } catch {
      return null;
    }
  };

  const resolveUrl = (value) => {
    try {
      return new URL(value, location.href).href;
    } catch {
      return null;
    }
  };

  const inlineCssUrls = async (css) => {
    const matches = [...css.matchAll(/url\((['"]?)([^'")]+)\1\)/g)];
    let next = css;
    for (const [full, , raw] of matches) {
      if (raw.startsWith("data:") || raw.startsWith("#")) continue;
      const absolute = resolveUrl(raw);
      if (!absolute) continue;
      const dataUrl = await asDataUrl(absolute);
      if (!dataUrl) continue;
      next = next.split(full).join(`url("${dataUrl}")`);
    }
    return next;
  };

  for (const link of [...document.querySelectorAll('link[rel="stylesheet"]')]) {
    const href = link.href;
    // Prefer the CSS the page actually parsed: no second network hop, no
    // silent loss of a stylesheet (which drops @font-face rules).
    let css = null;
    try {
      const sheet = [...document.styleSheets].find((s) => s.href === href);
      if (sheet) {
        css = [...sheet.cssRules].map((rule) => rule.cssText).join("\n");
      }
    } catch {
      css = null;
    }
    if (!css) {
      const dataUrl = await asDataUrl(href);
      if (dataUrl) {
        try {
          css = atob(dataUrl.split(",")[1]);
        } catch {
          css = null;
        }
      }
    }
    if (!css) {
      console.warn(`Could not inline stylesheet: ${href}`);
      link.remove();
      continue;
    }
    const style = document.createElement("style");
    style.textContent = await inlineCssUrls(css);
    link.replaceWith(style);
  }

  for (const style of [...document.querySelectorAll("style")]) {
    if (!style.textContent || !style.textContent.includes("url(")) continue;
    style.textContent = await inlineCssUrls(style.textContent);
  }

  for (const img of [...document.querySelectorAll("img")]) {
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    const raw = img.getAttribute("src");
    if (!raw) continue;
    const absolute = resolveUrl(raw);
    if (!absolute) continue;
    const dataUrl = await asDataUrl(absolute);
    if (dataUrl) img.setAttribute("src", dataUrl);
  }

  for (const element of [
    ...document.querySelectorAll(
      'link[rel="preload"], link[rel="modulepreload"], link[rel="prefetch"], link[rel="stylesheet"], script, noscript'
    ),
  ]) {
    element.remove();
  }

  document
    .querySelectorAll("nextjs-portal, [data-nextjs-toast], [data-next-badge-root]")
    .forEach((element) => element.remove());

  // Normalise any computed colour (rgb(), rgba(), color(srgb ...)) to 0-255
  // channels. Guessing from raw digits breaks on color-mix output.
  const toRgb255 = (value) => {
    const v = (value || "").trim();
    const srgb = v.match(/^color\(\s*srgb\s+([^)]+)\)$/i);
    if (srgb) {
      return srgb[1]
        .split(/[\s/]+/)
        .filter(Boolean)
        .slice(0, 3)
        .map((n) => Math.round(Number(n) * 255));
    }
    const rgb = v.match(/^rgba?\(([^)]+)\)$/i);
    if (rgb) {
      return rgb[1]
        .split(/[\s,/]+/)
        .filter(Boolean)
        .slice(0, 3)
        .map(Number);
    }
    return null;
  };

  const toHex = (rgb) =>
    `#${rgb
      .map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()}`;

  for (const code of [...document.querySelectorAll("[data-value]")]) {
    const swatch = code.parentElement?.querySelector("[data-swatch]");
    if (!swatch) continue;
    const rgb = toRgb255(getComputedStyle(swatch).backgroundColor);
    if (!rgb || rgb.length < 3) continue;
    code.textContent = toHex(rgb);
  }

  const channel = (value) => {
    const n = Number(value) / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  };
  const luminance = (rgb) => {
    const [r, g, b] = rgb.map(channel);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  for (const code of [...document.querySelectorAll("[data-contrast]")]) {
    const [foreground, background] = code.dataset.contrast.split("/");
    const probe = document.createElement("span");
    probe.style.color = `var(${foreground})`;
    probe.style.backgroundColor = `var(${background})`;
    probe.style.position = "absolute";
    probe.style.opacity = "0";
    document.body.append(probe);
    const computed = getComputedStyle(probe);
    const fg = toRgb255(computed.color);
    const bg = toRgb255(computed.backgroundColor);
    probe.remove();
    if (!fg || !bg) continue;
    const [light, dark] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
    code.textContent = `${((light + 0.05) / (dark + 0.05)).toFixed(2)}:1`;
  }

  const snapshot = document.createElement("style");
  snapshot.textContent = `
    *, *::before, *::after {
      transition: none !important;
      animation: none !important;
    }
    .reveal {
      opacity: 1 !important;
      transform: none !important;
    }
  `;
  document.head.append(snapshot);

  return `<!doctype html>\n${document.documentElement.outerHTML}`;
});

await browser.close();

await writeFile(outputPath, html, "utf8");

const remaining = html.match(/(?:src|href)="(?!data:|#)[^"]+"/g) ?? [];
console.log(`Wrote ${outputPath}`);
console.log(`Size: ${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB`);
console.log(`Remaining external references: ${remaining.length}`);
for (const ref of remaining.slice(0, 20)) console.log(`  ${ref}`);

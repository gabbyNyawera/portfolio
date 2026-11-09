/**
 * One-time migration: capture the server-rendered HTML of every route from a
 * running `next start`, strip the framework, and write plain static HTML.
 *
 * Usage: node scripts/extract-static.mjs [baseUrl]
 *   baseUrl defaults to http://localhost:3100
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const BASE = process.argv[2] ?? "http://localhost:3100";
const ROOT = process.cwd();
const OUT = path.join(ROOT, "site");
const RAW = path.join(ROOT, "site", "_raw");

/** Route -> output file. */
const routes = [
  ["/", "index.html"],
  ["/work", "work/index.html"],
  ["/work/kavara-kavara", "work/kavara-kavara/index.html"],
  ["/work/jack-reverse", "work/jack-reverse/index.html"],
  ["/work/study-app", "work/study-app/index.html"],
  ["/work/portfolio", "work/portfolio/index.html"],
  ["/philosophy", "philosophy/index.html"],
  ["/design-system", "design-system/index.html"],
  ["/design-system/boards", "design-system/boards/index.html"],
  ["/design-system/directions", "design-system/directions/index.html"],
  ["/design-system/harvest", "design-system/harvest/index.html"],
  ["/design-system/harvest/gold", "design-system/harvest/gold/index.html"],
  ["/design-system/palettes", "design-system/palettes/index.html"],
  ["/design-system/palettes/moodboard", "design-system/palettes/moodboard/index.html"],
  ["/design-system/texture", "design-system/texture/index.html"],
  ["/design-system/title", "design-system/title/index.html"],
  ["/design-system/type", "design-system/type/index.html"],
  ["/prototype/books", "prototype/books/index.html"],
  ["/prototype/buttons", "prototype/buttons/index.html"],
];

function decodeNextImage(url) {
  if (!url.startsWith("/_next/image?")) return url;
  const query = url.slice("/_next/image?".length);
  const params = new URLSearchParams(query.replaceAll("&amp;", "&"));
  return params.get("url") ?? url;
}

function clean(html) {
  let out = html;

  // Framework document class hooks (next/font) are replaced by our own vars.
  out = out.replace(/\s*__variable_[a-z0-9]+/g, "");

  // Remove every script: hydration, chunks, inline flight data.
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  out = out.replace(/<script\b[^>]*\/>/gi, "");

  // Remove framework stylesheet + preload tags; ours is injected below.
  out = out.replace(/<link[^>]+rel="stylesheet"[^>]*>/gi, "");
  out = out.replace(/<link[^>]+rel="preload"[^>]*>/gi, "");
  out = out.replace(/<link[^>]+data-precedence="[^"]*"[^>]*>/gi, "");

  // Drop Next's own image optimizer and responsive metadata.
  out = out.replace(/(\ssrcSet="[^"]*")/gi, "");
  out = out.replace(/(\ssrcset="[^"]*")/gi, "");
  out = out.replace(/(\ssizes="[^"]*")/gi, "");
  out = out.replace(/(\sdata-nimg="[^"]*")/gi, "");
  out = out.replace(/\ssrc="([^"]*)"/gi, (match, src) => {
    const cleaned = decodeNextImage(src);
    return ` src="${cleaned}"`;
  });

  // The portrait ships as WebP; the PNG stays only for social previews.
  out = out.replace(
    /(<img\b[^>]*?)\ssrc="\/images\/hero\/gabe-illustration\.png"/gi,
    '$1 src="/images/hero/gabe-illustration.webp"'
  );

  // Lazy-load everything except the priority portrait.
  out = out.replace(/<img\b[^>]*>/gi, (tag) => {
    if (tag.includes('width="1230"') || /\sloading=/.test(tag)) return tag;
    return tag.replace(/\s*\/?>$/, ' loading="lazy" decoding="async">');
  });

  // Drop images with no source: the old app rendered an empty <img> for
  // projects without artwork, which shows a broken-image icon on the web.
  out = out.replace(/<img\b(?![^>]*\ssrc=)[^>]*>/gi, "");
  out = out.replace(/<img\b[^>]*\ssrc=""[^>]*>/gi, "");

  // Icon query strings were cache busters from the framework.
  out = out.replace(/(href="\/favicon\.ico)\?[^"]*"/gi, '$1"');
  out = out.replace(/(href="\/icon\.png)\?[^"]*"/gi, '$1"');
  out = out.replace(/(href="\/apple-icon\.png)\?[^"]*"/gi, '$1"');

  // React text-boundary comments.
  out = out.replace(/<!--\$-->/g, "");
  out = out.replace(/<!--\/\$-->/g, "");
  out = out.replace(/<!--\s*-->/g, "");
  out = out.replace(/<div hidden="">\s*<\/div>/g, "");

  // Interaction hooks (the vanilla JS targets these instead of React refs).
  let cursorSeen = 0;
  out = out.replace(
    /class="pointer-events-none fixed left-0 top-0 z-\[9999\][^"]*"/g,
    (match) => {
      cursorSeen += 1;
      const hook = cursorSeen === 1 ? "cursor-dot" : "cursor-ring";
      return `${match} data-cursor-${hook === "cursor-dot" ? "dot" : "ring"}`;
    }
  );
  out = out.replace(/class="alive-pointer /g, 'data-alive-pointer class="alive-pointer ');
  out = out.replace(
    /class="fixed inset-x-0 top-0 z-\[60\] h-\[2px\][^"]*"/g,
    (match) => `${match} data-scroll-progress`
  );
  out = out.replace(/class="will-change-transform relative"/g, 'data-tilt class="will-change-transform relative"');

  // Local time is rendered as a dash on the server; mark it for the ticker.
  out = out.replace(/>Harare\s*[—-]</g, ' data-local-time>Harare —<');

  // Inject our own assets.
  out = out.replace(
    /<\/head>/i,
    '  <script>document.documentElement.classList.add("js")</script>\n  <link rel="stylesheet" href="/assets/css/site.css">\n</head>'
  );
  out = out.replace(
    /<\/body>/i,
    '  <script src="/assets/js/site.js" defer></script>\n</body>'
  );

  // Collapse the whitespace React leaves behind without touching <pre>.
  out = out.replace(/[ \t]+\n/g, "\n");

  return out;
}

await rm(RAW, { recursive: true, force: true });
await mkdir(RAW, { recursive: true });

for (const [route, file] of routes) {
  const res = await fetch(new URL(route, BASE));
  if (!res.ok) throw new Error(`${route} -> ${res.status}`);
  const html = await res.text();
  await mkdir(path.dirname(path.join(OUT, file)), { recursive: true });
  await writeFile(path.join(OUT, file), clean(html), "utf8");
  await writeFile(
    path.join(RAW, file.replaceAll("/", "_").replace(/\.html$/, ".raw.html")),
    html,
    "utf8"
  );
  console.log(`wrote ${file}`);
}

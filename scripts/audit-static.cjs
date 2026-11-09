const { chromium } = require("playwright");
const path = require("node:path");
const fs = require("node:fs/promises");

const BASE = process.argv[2] ?? "http://localhost:3200";
const routes = [
  "/",
  "/work",
  "/work/kavara-kavara",
  "/work/jack-reverse",
  "/work/study-app",
  "/work/portfolio",
  "/philosophy",
  "/design-system",
  "/design-system/boards",
  "/design-system/directions",
  "/design-system/harvest",
  "/design-system/harvest/gold",
  "/design-system/palettes",
  "/design-system/palettes/moodboard",
  "/design-system/texture",
  "/design-system/title",
  "/design-system/type",
  "/prototype/books",
  "/prototype/buttons",
  "/prototype/type-pairing",
  "/prototype/human-energy",
  "/prototype/human-energy/option-a",
  "/prototype/human-energy/option-b",
  "/prototype/human-energy/option-c",
  "/prototype/human-energy/option-d",
];

(async () => {
  try {
    await fetch(BASE);
  } catch {
    console.error(`No server at ${BASE}. Run "npm run dev" first.`);
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const report = [];

  for (const route of routes) {
    const errors = [];
    const failed = [];
    const onConsole = (message) => {
      if (message.type() === "error") errors.push(message.text());
    };
    const onResponse = (response) => {
      if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`);
    };
    page.on("console", onConsole);
    page.on("response", onResponse);

    await page.goto(new URL(route, BASE).href, { waitUntil: "networkidle" });
    const data = await page.evaluate(() => {
      const resources = performance.getEntriesByType("resource");
      const bytes = resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0);
      const nextRefs = (document.documentElement.outerHTML.match(/\/_next\//g) || []).length;
      const scripts = [...document.querySelectorAll("script")].map((s) => s.src || "inline");
      return {
        title: document.title,
        nextRefs,
        scripts,
        transferKB: Math.round(bytes / 1024),
        lazyImages: [...document.images].filter((i) => i.loading === "lazy").length,
        brokenImages: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).length,
      };
    });

    page.off("console", onConsole);
    page.off("response", onResponse);
    report.push({ route, ...data, errors, failed });
  }

  // Philosophy page: confirm the standard layout rendered without JS navigation.
  await page.goto(new URL("/philosophy", BASE).href, { waitUntil: "networkidle" });
  const philosophy = await page.evaluate(() => ({
    title: document.title,
    sections: document.querySelectorAll("main > section").length,
    images: document.images.length,
    brokenImages: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).length,
    darkSection: !!document.querySelector(".dark-section"),
  }));

  // Reveal + local time on home.
  await page.goto(new URL("/", BASE).href, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(700);
  const home = await page.evaluate(() => ({
    reveals: document.querySelectorAll(".reveal").length,
    revealed: document.querySelectorAll('.reveal[data-visible="true"]').length,
    time: document.querySelector("[data-local-time]")?.textContent,
    heroSrc: document.querySelector('img[width="1230"]')?.currentSrc,
  }));

  await browser.close();
  await fs.mkdir("audit", { recursive: true });
  await fs.writeFile(path.join("audit", "report.json"), JSON.stringify({ report, philosophy, home }, null, 2));
  console.log(JSON.stringify({ report, philosophy, home }, null, 2));
})();

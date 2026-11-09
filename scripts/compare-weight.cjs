const { chromium } = require("playwright");

async function measure(browser, url) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  const result = await page.evaluate(() => {
    const resources = performance.getEntriesByType("resource");
    const byType = (test) =>
      Math.round(
        resources
          .filter((entry) => test(entry.name))
          .reduce((sum, entry) => sum + (entry.transferSize || 0), 0) / 1024
      );
    const nav = performance.getEntriesByType("navigation")[0];
    return {
      totalKB: Math.round(resources.reduce((sum, entry) => sum + (entry.transferSize || 0), 0) / 1024),
      scriptKB: byType((name) => name.endsWith(".js")),
      cssKB: byType((name) => name.endsWith(".css")),
      imageKB: byType((name) => /\.(png|jpe?g|webp|avif|svg)(\?|$)/.test(name) || name.includes("/_next/image")),
      resourceCount: resources.length,
      domContentLoadedMs: Math.round(nav.domContentLoadedEventEnd),
      loadMs: Math.round(nav.loadEventEnd),
    };
  });
  await context.close();
  return result;
}

(async () => {
  const browser = await chromium.launch();
  const staticHome = await measure(browser, "http://localhost:3200/");
  const nextHome = await measure(browser, "http://localhost:3100/");
  const staticCase = await measure(browser, "http://localhost:3200/work/kavara-kavara");
  const nextCase = await measure(browser, "http://localhost:3100/work/kavara-kavara");
  await browser.close();
  console.log(JSON.stringify({ staticHome, nextHome, staticCase, nextCase }, null, 2));
})();

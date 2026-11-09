const { chromium } = require("playwright");
const fs = require("node:fs/promises");
const path = require("node:path");

(async () => {
  const [base, outDir] = [process.argv[2] ?? "http://localhost:3200", process.argv[3] ?? "shots-static-mobile"];
  const routes = [
    ["/", "home"],
    ["/work", "work"],
    ["/work/kavara-kavara", "case-kavara"],
    ["/philosophy", "philosophy"],
    ["/missing-page", "404"],
  ];

  await fs.mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  for (const [route, name] of routes) {
    await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
  }

  // Desktop 404.
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(new URL("/missing-page", base).href, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "404-desktop.png") });

  await browser.close();
  console.log("done");
})();

const { chromium } = require("playwright");
const fs = require("node:fs/promises");
const path = require("node:path");

(async () => {
  const [base, outDir] = [process.argv[2] ?? "http://localhost:3200", process.argv[3] ?? "shots-static"];
  const routes = [
    ["/", "home"],
    ["/work", "work"],
    ["/work/kavara-kavara", "case-kavara"],
    ["/philosophy", "philosophy"],
    ["/design-system", "design-system"],
    ["/prototype/buttons", "prototype-buttons"],
  ];

  await fs.mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  for (const [route, name] of routes) {
    await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
  }

  await browser.close();
  console.log("done");
})();

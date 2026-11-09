const postcss = require("postcss");
const tailwind = require("@tailwindcss/postcss");
const { transform } = require("lightningcss");
const fs = require("node:fs/promises");
const path = require("node:path");

(async () => {
  const root = process.cwd();
  const from = path.join(root, "site/assets/css/source.css");
  const to = path.join(root, "site/assets/css/site.css");
  const css = await fs.readFile(from, "utf8");

  const processed = await postcss([tailwind()]).process(css, { from });
  const { code } = transform({
    filename: to,
    code: Buffer.from(processed.css),
    minify: true,
  });

  await fs.writeFile(to, code);
  console.log(`site.css ${(code.length / 1024).toFixed(1)} KB`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

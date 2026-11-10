/**
 * Build the sendable design-system specimen.
 *
 * The output is one HTML file with the three families and the page gradient
 * embedded as base64, so it opens from a chat download with no server, no
 * network and no side files.
 *
 *   node scripts/build-specimen.cjs
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const templatePath = path.join(__dirname, "specimen", "template.html");
const outPath = path.join(root, "design-system-specimen.html");

// The shipped font stack, matching site/assets/css/fonts.css.
const fonts = {
  "%%BOSKA_300%%": "boska-300-italic.woff2",
  "%%BOSKA_400%%": "boska-400-italic.woff2",
  "%%BOSKA_500%%": "boska-500-italic.woff2",
  "%%INSTRUMENT_SANS%%": "instrument-sans-normal.woff2",
  "%%INTER%%": "e4af272ccee01ff0-s.p.woff2",
};

const images = {
  "%%HERO_GRADIENT%%": path.join("site", "images", "hero", "hero-gradient.webp"),
};

let html = fs.readFileSync(templatePath, "utf8");

for (const [placeholder, file] of Object.entries(fonts)) {
  const fontPath = path.join(root, "site", "assets", "fonts", file);
  if (!fs.existsSync(fontPath)) {
    throw new Error(`Missing font: ${fontPath}`);
  }
  const base64 = fs.readFileSync(fontPath).toString("base64");
  html = html.replaceAll(placeholder, base64);
}

for (const [placeholder, file] of Object.entries(images)) {
  const imagePath = path.join(root, file);
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Missing image: ${imagePath}`);
  }
  const base64 = fs.readFileSync(imagePath).toString("base64");
  html = html.replaceAll(placeholder, base64);
}

const leftovers = html.match(/%%[A-Z_]+%%/g);
if (leftovers) {
  throw new Error(`Unreplaced placeholders: ${[...new Set(leftovers)].join(", ")}`);
}

fs.writeFileSync(outPath, html);

const kb = (fs.statSync(outPath).size / 1024).toFixed(0);
console.log(`Wrote ${path.relative(root, outPath)} (${kb} KB, self-contained)`);

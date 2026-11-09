/**
 * One-time migration: lift every @font-face from the built Next CSS into a
 * standalone stylesheet, copying the woff2 files into site/assets/fonts.
 */
import { readdir, readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const CSS_DIR = path.join(ROOT, ".next", "static", "css");
const MEDIA_DIR = path.join(ROOT, ".next", "static", "media");
const OUT_FONTS = path.join(ROOT, "site", "assets", "fonts");
const OUT_CSS = path.join(ROOT, "site", "assets", "css", "fonts.css");

await mkdir(OUT_FONTS, { recursive: true });
await mkdir(path.dirname(OUT_CSS), { recursive: true });

const files = (await readdir(CSS_DIR)).filter((f) => f.endsWith(".css"));
const seen = new Map();
const copied = new Set();

for (const file of files) {
  const css = await readFile(path.join(CSS_DIR, file), "utf8");
  for (const match of css.matchAll(/@font-face\s*\{[^}]*\}/g)) {
    let block = match[0];
    const urlMatch = block.match(/url\((?:["']?)(\/_next\/static\/media\/[^)"']+)(?:["']?)\)/);
    if (!urlMatch) continue;

    const basename = path.basename(urlMatch[1]);
    block = block.replace(urlMatch[0], `url(/assets/fonts/${basename})`);

    if (!seen.has(block)) seen.set(block, true);
    if (!copied.has(basename)) {
      await copyFile(path.join(MEDIA_DIR, basename), path.join(OUT_FONTS, basename));
      copied.add(basename);
    }
  }
}

const header = "/* Self-hosted font faces lifted from the original build. */\n";
await writeFile(OUT_CSS, header + [...seen.keys()].join("\n") + "\n", "utf8");
console.log(`wrote ${seen.size} font faces and ${copied.size} woff2 files`);

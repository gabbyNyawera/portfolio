const fs = require("node:fs");
const path = require("node:path");

const root = path.join(process.cwd(), "site");
const files = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
}
walk(root);

const missing = new Map();
const checked = new Set();

function resolve(url) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean.startsWith("/")) return null;
  if (clean === "/") return path.join(root, "index.html");
  const target = path.join(root, clean);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) return path.join(target, "index.html");
  return target;
}

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/")) continue;
    if (url.startsWith("//")) continue;
    if (checked.has(url)) continue;
    checked.add(url);
    const target = resolve(url);
    if (!target || !fs.existsSync(target)) {
      const list = missing.get(url) ?? [];
      list.push(path.relative(root, file));
      missing.set(url, list);
    }
  }
}

if (missing.size === 0) {
  console.log(`All ${checked.size} internal references resolve.`);
} else {
  for (const [url, sources] of missing) {
    console.log(`MISSING ${url} <- ${sources.join(", ")}`);
  }
  process.exitCode = 1;
}

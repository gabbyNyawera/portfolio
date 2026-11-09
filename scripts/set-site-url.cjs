/**
 * Point social-preview URLs at the deployed origin.
 * Usage: node scripts/set-site-url.cjs https://example.com
 */
const fs = require("node:fs");
const path = require("node:path");

const origin = (process.argv[2] ?? "").replace(/\/$/, "");
if (!/^https?:\/\/[^/]+$/.test(origin)) {
  console.error("Usage: node scripts/set-site-url.cjs https://example.com");
  process.exit(1);
}

const root = path.join(process.cwd(), "site");
let changed = 0;

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    const before = fs.readFileSync(full, "utf8");
    const after = before.replaceAll("http://localhost:3000", origin);
    if (after !== before) {
      fs.writeFileSync(full, after);
      changed += 1;
    }
  }
}

walk(root);
console.log(`Updated ${changed} files to ${origin}`);

/**
 * Zero-dependency static server for the plain site.
 * Usage: node scripts/serve-static.cjs [port]
 */
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const port = Number(process.argv[2] ?? 3200);
const root = path.join(process.cwd(), "site");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

http
  .createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    let filePath = path.join(root, decodeURIComponent(url.pathname));

    if (!filePath.startsWith(root)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    if (!fs.existsSync(filePath)) {
      const notFound = path.join(root, "404.html");
      response.writeHead(404, { "content-type": types[".html"] });
      response.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : "Not found");
      return;
    }

    const type = types[path.extname(filePath)] ?? "application/octet-stream";
    const compressible = /^(text\/|application\/(javascript|json)|image\/svg)/.test(type);
    const acceptsGzip = /gzip/.test(request.headers["accept-encoding"] ?? "");

    if (compressible && acceptsGzip) {
      const body = zlib.gzipSync(fs.readFileSync(filePath));
      response.writeHead(200, {
        "content-type": type,
        "content-encoding": "gzip",
        "cache-control": "no-cache",
      });
      response.end(body);
      return;
    }

    response.writeHead(200, {
      "content-type": type,
      "cache-control": "no-cache",
    });
    fs.createReadStream(filePath).pipe(response);
  })
  .listen(port, () => {
    console.log(`Static site: http://localhost:${port}`);
  });

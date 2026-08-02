import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "docs");
const clientRoot = path.join(projectRoot, "dist", "client");
const publicRoot = path.join(projectRoot, "public");
const siteOrigin = "https://Wesley1110.github.io";

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const workerUrl = pathToFileURL(path.join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("github-pages-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const assetNames = await readdir(path.join(clientRoot, "assets"));
const stylesheetName = assetNames.find((name) => name.endsWith(".css"));
if (!stylesheetName) throw new Error("Built stylesheet was not found.");

await cp(publicRoot, outputRoot, { recursive: true });
await cp(
  path.join(clientRoot, "assets", stylesheetName),
  path.join(outputRoot, "styles.css"),
);
await writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");

const routes = ["/", "/research", "/teaching"];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(new URL(route, siteOrigin), {
      headers: {
        accept: "text/html",
        host: "Wesley1110.github.io",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to render ${route}: ${response.status}`);
  }

  const canonicalUrl = new URL(route, siteOrigin).href;
  const html = (await response.text())
    .replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi, '<link rel="stylesheet" href="/styles.css">')
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `<link rel="canonical" href="${canonicalUrl}"></head>`);

  const routeDirectory = route === "/" ? outputRoot : path.join(outputRoot, route.slice(1));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), html, "utf8");
}

const indexHtml = await readFile(path.join(outputRoot, "index.html"), "utf8");
if (!indexHtml.includes("Wesley Tzeng")) {
  throw new Error("GitHub Pages export validation failed.");
}

console.log(`GitHub Pages export created at ${outputRoot}`);

import assert from "node:assert/strict";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost/"), {
      headers: { accept: "text/html" },
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
}

test("server-renders the academic homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Wesley Tzeng/);
  assert.match(html, /Researching how information becomes price/);
  assert.match(html, /BI Norwegian Business School/);
  assert.doesNotMatch(html, /codex-preview|Building your site/i);
});

test("server-renders research topics without manuscript titles", async () => {
  const response = await render("/research");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Working paper topics/);
  assert.match(html, /papers\.ssrn\.com\/sol3\/cf_dev\/AbsByAuth\.cfm\?per_id=6262633/);
  assert.match(html, /github\.com\/Wesley1110/);
  assert.match(html, /Adverse-news salience in foreign-exchange markets/);
  assert.match(html, /With Mi-Hsiu Chiang/);
  assert.doesNotMatch(html, /The Multifaceted Economic Policy Uncertainty Effects on Asset Prices/);
  assert.doesNotMatch(html, /Adverse News Salience and Exchange Rate Predictability/);
});

test("server-renders teaching resources", async () => {
  const response = await render("/teaching");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Consistency, mean-square convergence/);
  assert.match(html, /Barone-Adesi and Whaley \(1987\)/);
  assert.match(html, /teaching-consistency-mse\.pdf/);
});

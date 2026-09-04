import { chromium } from "playwright";

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

async function scrollThrough() {
  await p.evaluate(async () => {
    const step = 400;
    let y = 0;
    const max = document.body.scrollHeight;
    while (y < max) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
      y += step;
    }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(300);
}

await p.goto("http://localhost:3050/insights", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
await scrollThrough();
await p.screenshot({ path: "d:/tmp/insights_listing.png", fullPage: true });

const chip = p.getByRole("button", { name: "AI in Practice" });
if (await chip.count()) {
  await chip.click();
  await p.waitForTimeout(400);
  await scrollThrough();
  await p.screenshot({ path: "d:/tmp/insights_listing_filtered.png", fullPage: true });
  const all = p.getByRole("button", { name: "All" });
  if (await all.count()) await all.click();
}

const search = p.getByPlaceholder("Search articles…");
if (await search.count()) {
  await search.fill("zzz-no-match");
  await p.waitForTimeout(400);
  await p.screenshot({ path: "d:/tmp/insights_listing_empty.png", fullPage: true });
  await search.fill("");
}

await p.goto("http://localhost:3050/insights/where-ai-actually-saves-time-in-a-marketing-team", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
await scrollThrough();
await p.screenshot({ path: "d:/tmp/insights_article1.png", fullPage: true });

await p.goto("http://localhost:3050/insights/first-90-days-with-a-fractional-marketing-lead", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
await scrollThrough();
await p.screenshot({ path: "d:/tmp/insights_article2.png", fullPage: true });

await p.setViewportSize({ width: 390, height: 844 });
await p.goto("http://localhost:3050/insights", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
await scrollThrough();
await p.screenshot({ path: "d:/tmp/insights_listing_mobile.png", fullPage: true });

await p.goto("http://localhost:3050/insights/does-not-exist", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
await p.setViewportSize({ width: 1440, height: 900 });
await p.screenshot({ path: "d:/tmp/insights_404.png", fullPage: true });

await b.close();
console.log("ok");

import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 860 }, deviceScaleFactor: 2 });
await p.goto("http://localhost:3100", { waitUntil: "networkidle" });
// wait until a full phrase is shown (contains "for" with a word after), then grab during hold
for (let i = 0; i < 40; i++) {
  const txt = await p.evaluate(() => document.querySelector("h1")?.innerText.replace(/\s+/g,' ').trim());
  if (/for \w/.test(txt) && txt.length > 16) break;
  await p.waitForTimeout(120);
}
await p.waitForTimeout(120);
await p.screenshot({ path: "d:/tmp/r_hero2.png" });
await b.close();
console.log("ok");

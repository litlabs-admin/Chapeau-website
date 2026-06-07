import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1100, height: 520 }, deviceScaleFactor: 2 });
await p.goto("http://localhost:3100", { waitUntil: "networkidle" });
const samples = [];
for (let i = 0; i < 14; i++) {
  await p.waitForTimeout(380);
  const txt = await p.evaluate(() => document.querySelector("h1")?.innerText.replace(/\s+/g,' ').trim());
  samples.push(txt);
}
console.log(JSON.stringify(samples, null, 0));
// capture one frame that has both words typed
await b.close();

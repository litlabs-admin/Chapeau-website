import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 620 }, deviceScaleFactor: 2 });
await p.goto("http://localhost:3100", { waitUntil: "networkidle" });
await p.evaluate(() => { const el=[...document.querySelectorAll('h2')].find(h=>/Need more than advice/i.test(h.textContent)); el?.scrollIntoView({block:'center'}); });
await p.waitForTimeout(900);
await p.screenshot({ path: "d:/tmp/r2_cta_close.png" });
await b.close(); console.log("ok");

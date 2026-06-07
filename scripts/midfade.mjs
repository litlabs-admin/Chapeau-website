import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await p.goto("http://localhost:3100", { waitUntil: "networkidle" });
await p.waitForTimeout(600);
await p.evaluate(() => window.scrollTo({ top: 1700, behavior: "instant" }));
await p.waitForTimeout(180); // catch mid-fade
await p.screenshot({ path: "d:/tmp/r2_midfade.png" });
await b.close(); console.log("ok");

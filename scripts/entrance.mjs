import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 600 }, deviceScaleFactor: 2 });
// catch the hero mid-entrance (~280ms in)
await p.goto("http://localhost:3100/examples", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(300);
await p.screenshot({ path: "d:/tmp/ex2_hero_mid.png" });
// settled state
await p.waitForTimeout(1400);
await p.screenshot({ path: "d:/tmp/ex2_hero_settled.png" });
await b.close(); console.log("ok");

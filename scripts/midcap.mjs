import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 980, height: 420 }, reducedMotion: "no-preference", deviceScaleFactor: 1 });
const p = await ctx.newPage();
await p.goto("http://localhost:3100/examples", { waitUntil: "domcontentloaded" });
await p.waitForTimeout(parseInt(process.argv[2]||"250"));
await p.screenshot({ path: process.argv[3] || "d:/tmp/mid.png" });
await b.close(); console.log("cap", process.argv[2]);

import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1100, height: 720 }, deviceScaleFactor: 1 });
await p.goto("http://localhost:3100/knowledge-room", { waitUntil: "networkidle" });
await p.waitForTimeout(900);
await p.screenshot({ path: "d:/tmp/p_kr3.png" });
await b.close(); console.log("ok");

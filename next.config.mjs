import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
p.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
p.on("pageerror", (e) => errs.push("PAGEERROR: " + e.message));
await p.goto("http://localhost:3100", { waitUntil: "networkidle" });
await p.waitForTimeout(1500);
// check hero h1 height stability across rotations
const heights = new Set();
for (let i = 0; i < 8; i++) {
  const h = await p.evaluate(() => document.querySelector("h1")?.getBoundingClientRect().height);
  heights.add(Math.round(h));
  await p.waitForTimeout(600);
}
console.log("CONSOLE_ERRORS:", errs.length ? errs : "none");
console.log("H1_HEIGHTS:", [...heights]);
await b.close();

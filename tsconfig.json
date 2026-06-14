import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 700 } });
await p.goto("http://localhost:3100/examples", { waitUntil: "domcontentloaded" });
const samples = [];
for (let i=0;i<7;i++){ await p.waitForTimeout(140); const o = await p.evaluate(()=>{const h=document.querySelector('h1'); return h?getComputedStyle(h).opacity:'na';}); samples.push(o); }
console.log("h1 opacity over time:", samples.join(" -> "));
await b.close();

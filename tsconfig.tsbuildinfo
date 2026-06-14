import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 700 }, reducedMotion: "no-preference" });
const p = await ctx.newPage();
await p.goto("http://localhost:3100/examples", { waitUntil: "domcontentloaded" });
const samples = [];
for (let i=0;i<8;i++){ await p.waitForTimeout(120); const o = await p.evaluate(()=>{const h=document.querySelector('h1'); return h?(+getComputedStyle(h).opacity).toFixed(2):'na';}); samples.push(o); }
console.log("h1 opacity (no-pref):", samples.join(" -> "));
// also check what the browser reports by default
const def = await b.newPage();
await def.goto("http://localhost:3100/examples", { waitUntil: "domcontentloaded" });
const rm = await def.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
console.log("default headless reduce-motion matches:", rm);
await b.close();

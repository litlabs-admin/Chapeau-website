import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3100";
const out = process.argv[3] || "d:/tmp/shot.png";
const w = parseInt(process.argv[4] || "1440", 10);
const h = parseInt(process.argv[5] || "900", 10);
const full = process.argv[6] === "full";
const scrollY = parseInt(process.argv[7] || "0", 10);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: w, height: h },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

// Scroll through the page so whileInView reveals fire, then return to top.
await page.evaluate(async () => {
  const step = window.innerHeight * 0.8;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 180));
  }
  window.scrollTo(0, 0);
});
if (scrollY) await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await page.waitForTimeout(1200); // let entrance animations settle
await page.screenshot({ path: out, fullPage: full });
await browser.close();
console.log("saved", out);

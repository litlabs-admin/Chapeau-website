import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 1 });
await p.goto("http://localhost:3100/contact", { waitUntil: "networkidle" });
await p.fill('#name', 'Sam Carter');
await p.fill('#email', 'sam@acme.com');
await p.fill('#message', 'We want to scope a Build Sprint for a new landing page and SEO.');
await p.selectOption('#option', 'Build Sprint');
await p.click('button[type=submit]');
await p.waitForTimeout(1200);
const ok = await p.evaluate(() => document.body.innerText.includes('Thanks'));
console.log("success state shown:", ok);
// screenshot the form column region
const el = await p.$('form, [class*="rounded-2xl"]');
await p.screenshot({ path: "d:/tmp/p_contact_success.png", clip: { x: 560, y: 230, width: 680, height: 360 } });
await b.close();

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = '/Users/nmk_one/Downloads/hk_snaps';
const BASE = 'http://localhost:4321';

const shots = [
  { name: '01-hero-desktop-en', url: '/', viewport: { width: 1440, height: 900 }, fullPage: false },
  { name: '02-home-full-desktop-en', url: '/', viewport: { width: 1440, height: 900 }, fullPage: true },
  { name: '03-home-full-desktop-zh', url: '/zh-cn', viewport: { width: 1440, height: 900 }, fullPage: true },
  { name: '04-applications-desktop-en', url: '/#industries', viewport: { width: 1440, height: 900 }, fullPage: false, scrollTo: '#industries' },
  { name: '05-categories-desktop-en', url: '/#categories', viewport: { width: 1440, height: 900 }, fullPage: false, scrollTo: '#categories' },
  { name: '06-brands-desktop-en', url: '/#brand-wall', viewport: { width: 1440, height: 900 }, fullPage: false, scrollTo: '#brand-wall' },
  { name: '07-home-mobile-en', url: '/', viewport: { width: 390, height: 844 }, fullPage: true, isMobile: true },
  { name: '08-hero-mobile-en', url: '/', viewport: { width: 390, height: 844 }, fullPage: false, isMobile: true },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  deviceScaleFactor: 2,
  locale: 'en-US',
});

for (const shot of shots) {
  const page = await context.newPage();
  if (shot.isMobile) {
    await page.setViewportSize(shot.viewport);
  } else {
    await page.setViewportSize(shot.viewport);
  }

  await page.goto(`${BASE}${shot.url}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  if (shot.scrollTo) {
    const el = await page.$(shot.scrollTo);
    if (el) await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
  }

  if (shot.fullPage) {
    // Trigger lazy-loaded images (e.g. Global Supply map) before full-page capture.
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));
      const step = Math.max(window.innerHeight * 0.85, 400);
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await delay(120);
      }
      window.scrollTo(0, document.body.scrollHeight);
      await delay(200);
      window.scrollTo(0, 0);
      await delay(100);
    });
    await page.evaluate(async () => {
      const imgs = [...document.querySelectorAll('img')];
      await Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
              })
        )
      );
    });
    await page.waitForTimeout(300);
  }

  const file = path.join(OUT, `${shot.name}.png`);
  await page.screenshot({
    path: file,
    fullPage: !!shot.fullPage,
    type: 'png',
  });
  console.log('saved', file);
  await page.close();
}

await browser.close();
console.log('done', OUT);

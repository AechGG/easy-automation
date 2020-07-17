const { webkit } = require('playwright');

(async () => {
  // use webkit.launch({ headless: false, slowMo: 50});
  // To display browser and slowdown
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: `out/example-webkit.png` });
  await browser.close();
})();

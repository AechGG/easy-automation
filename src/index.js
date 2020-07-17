const { webkit, devices } = require('playwright');
const iPhone = devices['iPhone 11 Pro'];

const screenshotTest = async () => {
  // use webkit.launch({ headless: false, slowMo: 50});
  // To display browser and slowdown
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: `out/first-example-webkit.png` });
  await browser.close();
};

const iphoneBrowserContextTest = async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...iPhone,
    permissions: ['geolocation'],
    geolocation: { latitude: 52.52, longitude: 13.39 },
    colorScheme: 'dark',
    locale: 'de-DE',
  });
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.screenshot({ path: `out/iphone-example-webkit.png` });
  await browser.close();
};

(async () => {
  //   await screenshotTest();
  //   await iphoneBrowserContextTest();
})();

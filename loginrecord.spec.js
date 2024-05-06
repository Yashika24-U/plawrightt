const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^8$/ }).getByRole('button').click();

  // ---------------------
  await context.close();
  await browser.close();
})();
import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Galaxy S5'],
});

test('testgalaxys5', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});



test.use({
  ...devices['iPhone 11 Pro'],
});

test('testiPhone11Pro', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});


test.use({
  ...devices['iPhone 13'],
});

test('testiPhone', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});

test.use({
  ...devices['Nokia N9'],
});

test('testNokia', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});
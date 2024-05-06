import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Galaxy S5'],
});

test('test', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});



test.use({
  ...devices['iPhone 11 Pro'],
});

test('test', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});


test.use({
  ...devices['iPhone 13'],
});

test('test', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});

test.use({
  ...devices['Nokia N9'],
});

test('test', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
});
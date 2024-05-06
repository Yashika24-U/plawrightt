import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});
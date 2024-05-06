import { test, expect } from '@playwright/test';


test('singlepostlike', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^9$/ }).getByRole('button').click();
});



test('postslike', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^9$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^6$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍40$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^4$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^2$/ }).getByRole('button').click();
});

test('Likecountincreasecheck', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('thataaa@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('thataaa@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});

test('Unlike post', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!100$/ }).getByRole('button').nth(1).click();
});


test('Unlikeposts', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!100$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^7$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍50$/ }).getByRole('button').nth(1).click();
});


test('Likecountdecreasecheck', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashikareddy@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('yashikareddy@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});
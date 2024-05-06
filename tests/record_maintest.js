import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByText('Don\'t have an account ? Sign').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('user1');
  await page.getByLabel('Location').click();
  await page.getByLabel('Location').fill('');
  await page.getByLabel('Location').press('CapsLock');
  await page.getByLabel('Location').fill('H');
  await page.getByLabel('Location').press('CapsLock');
  await page.getByLabel('Location').fill('Hyderabad');
  await page.getByLabel('Occupation').click();
  await page.getByLabel('Occupation').fill('artist');
  await page.getByText('Add Picture Here').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser1@gmail.com');
  await page.getByRole('button', { name: 'REGISTER' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser1@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByPlaceholder('What\'s on your mind...').click();
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('H');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('Hey there👀');
  await page.getByText('Image').click();
  await page.getByText('Add Image Here').click();
  await page.getByRole('button', { name: 'POST' }).click();
  await page.locator('div').filter({ hasText: /^7$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^5$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!80$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Steve RalphNew York, CAHey , there !60$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍30$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍30$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^3$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Janu DoeUtah, CAHey all :\)40$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!80$/ }).getByRole('heading').click();

  // ---------------------
  await context.close();
  await browser.close();
})();
import { test, expect } from '@playwright/test';

test('add friend and check count', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashikareddy@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('yashikareddy@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^Steve RalphNew York, CAHey , there !70$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍50$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Janu DoeUtah, CAHey all :\)50$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNadu Every bite tells a flavorful story! 🍔✨30$/ }).getByRole('button').first().click();
  await page.locator('div:nth-child(8) > div > .MuiButtonBase-root').first().click();
  await page.locator('div:nth-child(7) > div > .MuiButtonBase-root').first().click();
  await page.locator('div:nth-child(11) > div > .MuiButtonBase-root').first().click();
  await page.locator('div:nth-child(19) > div > .MuiButtonBase-root').first().click();
  await page.locator('div:nth-child(18) > div > .MuiButtonBase-root').first().click();
  await page.getByText('friends').click();
  
});

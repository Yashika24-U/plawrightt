
import { test, expect } from '@playwright/test';
test('Friend Addition', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByText('LOGINDon\'t have an account ?').click();
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
    await page.locator('div:nth-child(2) > div:nth-child(3) > div').first().click();
    await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍40$/ }).getByRole('button').first().click();
  });

  test('Friendiconupdate', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByText('LOGINDon\'t have an account ?').click();
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
    await page.locator('div:nth-child(2) > div:nth-child(3) > div').first().click();
    await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍40$/ }).getByRole('button').first().click();
  });

  test('Friendlistverification', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByText('LOGINDon\'t have an account ?').click();
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
    await page.locator('div:nth-child(2) > div:nth-child(3) > div').first().click();
    await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍40$/ }).getByRole('button').first().click();
  });

  test('curruserfriendcountverification', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByText('LOGINDon\'t have an account ?').click();
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
    await page.locator('div:nth-child(2) > div:nth-child(3) > div').first().click();
    await page.locator('div').filter({ hasText: /^Andria JoeKorea, CA😍😍40$/ }).getByRole('button').first().click();
  });



test('Viewfriendprofile', async ({ page }) => {
  await page.locator('body').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser3@gmail.com');
  await page.getByLabel('Password').press('Enter');
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('heading').click();
});

test('friendprofilecountverification', async ({ page }) => {
    await page.locator('body').click();
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByLabel('Password').press('Enter');
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('heading').click();
  });

import { test, expect } from '@playwright/test';

test('removefriend', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser3@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
  await page.locator('div').filter({ hasText: /^Steve RalphNew York, CAHey , there !60$/ }).getByRole('button').first().click();
});

test('friendiconupdate', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
    await page.locator('div').filter({ hasText: /^Steve RalphNew York, CAHey , there !60$/ }).getByRole('button').first().click();
  });

test('friendlistverification', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('div').filter({ hasText: /^Yashika ReddyChennai,TamilNaduGood Foood Good Life !!90$/ }).getByRole('button').first().click();
    await page.locator('div').filter({ hasText: /^Steve RalphNew York, CAHey , there !60$/ }).getByRole('button').first().click();
  });


  test('friendprofilecountverification', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('yashikareddy@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('yashikareddy@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
  });

  test('curruserfriendcountverification', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('testuser3@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('testuser3@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
  });
  


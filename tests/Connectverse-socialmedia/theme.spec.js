import { test, expect } from '@playwright/test';

test('togglebuttoncheck', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('newuser@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('newuser@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('div').filter({ hasText: /^ConnectVersenew user$/ }).getByRole('button').nth(1).click();
    await page.locator('div').filter({ hasText: /^ConnectVersenew user$/ }).getByRole('button').nth(1).click();
  });
  

test('darkmodeactivation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^ConnectVersenew user$/ }).getByRole('button').nth(1).click();
});

test('lightmodeactivation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^ConnectVersenew user$/ }).getByRole('button').nth(1).click();
});

test('accessibilitytest', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^ConnectVersenew user$/ }).getByRole('button').nth(1).click();
  await page.locator('div').filter({ hasText: /^ConnectVersenew user$/ }).getByRole('button').nth(1).click();
});




test('themepersistence acrosspages', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashikareddy@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('yashikareddy@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.goto('https://myconnectverse.netlify.app/home');
  await page.locator('div').filter({ hasText: /^ConnectVerseYashika Reddy$/ }).getByRole('button').nth(1).click();
  await page.locator('h4').click();
});

test('UIconsistency', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('yashikareddy@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('yashikareddy@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.goto('https://myconnectverse.netlify.app/home');
    await page.locator('div').filter({ hasText: /^ConnectVerseYashika Reddy$/ }).getByRole('button').nth(1).click();
    await page.locator('h4').click();
  });



import { test, expect } from '@playwright/test';

test('successfull logout', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('thataaa@gmail.com');
  await page.getByLabel('Email').click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('thataaa@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^Steve Ralph$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Log Out' }).click();
  await expect(page.getByRole('button')).toContainText('LOGIN');
});


test('logout redirect to homepage', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashikareddy@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('yashikareddy@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('combobox').getByText('Yashika Reddy').click();
  await page.getByRole('option', { name: 'Log Out' }).click();
  await expect(page.locator('#root')).toContainText('ConnectVerse');
});


test('user data clearance', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashikareddy@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('yashikareddy@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('combobox').getByText('Yashika Reddy').click();
  await page.getByRole('option', { name: 'Log Out' }).click();
  await page.getByLabel('Email').click();
  await expect(page.locator('form')).toContainText('required');
});

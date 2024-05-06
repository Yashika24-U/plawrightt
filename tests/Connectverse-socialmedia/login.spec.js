import { test, expect } from '@playwright/test';

test('successtest', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser3@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('#root')).toContainText('ConnectVerse');
});


test('Email validation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashika123');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('form')).toContainText('invalid email');
});

test('user Validation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser100@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser100@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('form')).toContainText('Email = " " Password = " "');
});



test('Wrong credentials', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('test');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('form')).toContainText('Email = " " Password = " "');
});


test('Empty Validation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('form')).toContainText('required');
});
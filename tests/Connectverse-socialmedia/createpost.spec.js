import { test, expect } from '@playwright/test';

test('post upload success', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('Image').click();
  await page.getByText('Add Image Here').click();
  await page.getByPlaceholder('What\'s on your mind...').click();
  await page.getByPlaceholder('What\'s on your mind...').fill('hey');
  await page.getByRole('button', { name: 'POST' }).click();
  await page.getByText('hey', { exact: true }).click();
});




test('add delete post', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser3@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByPlaceholder('What\'s on your mind...').click();
  await page.getByPlaceholder('What\'s on your mind...').fill('happy or sad?');
  await page.getByText('Image').click();
  await page.getByText('Add Image Here').click();
  await page.getByRole('button').nth(2).click();
  await expect(page.locator('#root')).toContainText('Add Image Here');
});












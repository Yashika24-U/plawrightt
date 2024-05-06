import { test, expect } from '@playwright/test';

test('sucesstest', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newuser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});


test('Emailvalidation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('yashika123');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('');
  await page.getByRole('button', { name: 'LOGIN' }).click();
})


test('Credentialvalidation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('newuser@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('newser@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});

test('userValidation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser100@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser100@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});



test('Emptyvalidation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});
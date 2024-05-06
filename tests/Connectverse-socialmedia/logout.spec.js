import { test, expect } from '@playwright/test';

test('logout', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('thataaa@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('thataaa@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('combobox').getByText('Steve Ralph').click();
  await page.getByRole('option', { name: 'Log Out' }).click();
});

test('logoutredirecthomepage', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('thataaa@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('thataaa@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('combobox').getByText('Steve Ralph').click();
    await page.getByRole('option', { name: 'Log Out' }).click();
});




test('userdataclearance', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('thataaa@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('thataaa@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('combobox').getByText('Steve Ralph').click();
  await page.getByRole('option', { name: 'Log Out' }).click();
  await page.getByText('ConnectVerseWelcome to').click();
});

import { test, expect } from '@playwright/test';

test('successtest', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByText('Don\'t have an account ? Sign').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('user2');
  await page.getByLabel('Location').click();
  await page.getByLabel('Location').press('CapsLock');
  await page.getByLabel('Location').fill('M');
  await page.getByLabel('Location').press('CapsLock');
  await page.getByLabel('Location').fill('Mumbai');
  await page.getByLabel('Occupation').click();
  await page.getByLabel('Occupation').press('CapsLock');
  await page.getByLabel('Occupation').fill('A');
  await page.getByLabel('Occupation').press('CapsLock');
  await page.getByLabel('Occupation').fill('Artist');
  await page.locator('div').filter({ hasText: /^Add Picture Here$/ }).nth(1).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'REGISTER' }).click();
});



test('Imagefiletypecheck', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByText('Don\'t have an account ? Sign').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('user3');
  await page.getByLabel('Location').click();
  await page.getByLabel('Location').press('CapsLock');
  await page.getByLabel('Location').fill('B');
  await page.getByLabel('Location').press('CapsLock');
  await page.getByLabel('Location').fill('Bangalore');
  await page.getByLabel('Occupation').click();
  await page.getByLabel('Occupation').press('CapsLock');
  await page.getByLabel('Occupation').fill('P');
  await page.getByLabel('Occupation').press('CapsLock');
  await page.getByLabel('Occupation').fill('Photographer');
  await page.getByText('Add Picture Here').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser3@gmail.com');
  await page.getByRole('button', { name: 'REGISTER' }).click();
});



test('profilepictureabsence', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByText('Don\'t have an account ? Sign').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('user4');
  await page.getByLabel('Location').click();
  await page.getByLabel('Location').fill('delhi');
  await page.getByLabel('Occupation').click();
  await page.getByLabel('Occupation').fill('software engineer');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser4@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser4@gmail.com');
  await page.getByRole('button', { name: 'REGISTER' }).click();
});



test('uservalidation', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByText('Don\'t have an account ? Sign').click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('user1');
  await page.getByLabel('Location').click();
  await page.getByLabel('Location').fill('hyderabad');
  await page.getByLabel('Occupation').click();
  await page.getByLabel('Occupation').fill('software engineer');
  await page.getByText('Add Picture Here').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser1@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser1@gmail.com');
  await page.getByRole('button', { name: 'REGISTER' }).click();
});



test('emptyregistration', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByText('Don\'t have an account ? Sign').click();
  await page.getByRole('button', { name: 'REGISTER' }).click();
});



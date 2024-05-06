import { test, expect } from '@playwright/test';

test('postuploadsuccess', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByPlaceholder('What\'s on your mind...').click();
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('H');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('Happy ');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('Happy V');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('Happy Vacation!');
  await page.getByText('Image').click();
  await page.getByText('Add Image Here').click();
  await page.getByRole('button', { name: 'POST' }).click();
});



test('Postdescempty', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('Image').click();
  await page.getByText('Image', { exact: true }).click();
  await page.getByText('Image').click();
  await page.locator('div').filter({ hasText: /^Add Image Here$/ }).nth(2).click();
  await page.getByText('ImageClipAttachmentAudioPOST').click();
});




test('Postselectiondelete', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.goto('https://myconnectverse.netlify.app/home');
  await page.getByText('Image').click();
  await page.getByText('Add Image Here').click();
  await page.locator('div').filter({ hasText: /^trekking\.jpgImageClipAttachmentAudioPOST$/ }).getByRole('button').first().click();
});



test('Emptyposttest', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('ImageClipAttachmentAudioPOST').click();
});



test('Postdesconly', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser2@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser2@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div:nth-child(2) > div > div > .MuiInputBase-root').click();
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('E');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('E');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('M');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('Morning sunrise');
  await page.getByRole('button', { name: 'POST' }).click();
});


test('Emojisindesc', async ({ page }) => {
  await page.goto('https://myconnectverse.netlify.app/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('testuser3@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('testuser3@gmail.com');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByPlaceholder('What\'s on your mind...').click();
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('V');
  await page.getByPlaceholder('What\'s on your mind...').press('CapsLock');
  await page.getByPlaceholder('What\'s on your mind...').fill('Vacationmode😍🥳');
  await page.getByPlaceholder('What\'s on your mind...').click();
  await page.getByPlaceholder('What\'s on your mind...').press('ArrowLeft');
  await page.getByPlaceholder('What\'s on your mind...').fill('Vacationmode🥳');
  await page.getByText('Image').click();
  await page.getByText('Add Image Here').click();
  await page.locator('div').filter({ hasText: /^happyplace\.jpgImageClipAttachmentAudioPOST$/ }).getByTestId('EditOutlinedIcon').click();
  await page.getByRole('button', { name: 'POST' }).click();
});

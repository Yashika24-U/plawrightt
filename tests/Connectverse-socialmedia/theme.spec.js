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
  
  test('dark mode activation', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('thataaa@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('thataaa@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('button:has-text("Toggle Dark Mode")').click();
    const bodyClasses = await page.$eval('body', body => body.className);
    expect(bodyClasses).toContain('dark-mode');
    await page.locator('button:has-text("Toggle Light Mode")').click();
    const bodyClassesAfterLightMode = await page.$eval('body', body => body.className);
    expect(bodyClassesAfterLightMode).not.toContain('dark-mode');
  });
  


  test('accessibility test', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('thataaa@gmail.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('thataaa@gmail.com');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('div').filter({ hasText: /^ConnectVerseSteve Ralph$/ }).getByRole('button').nth(1).click();
    await expect(page.locator('#root')).toContainText('ConnectVerse');
  });

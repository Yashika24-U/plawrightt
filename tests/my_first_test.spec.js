const{test,expect} = require('@playwright/test')

// test('My first test',async({page})=>{
//     await page.goto('https://myconnectverse.netlify.app/')
//     const inputSelector = 'input[type = text]'
//     const inputValue = '123@gmail.com'
//     await page.type(inputSelector ,inputValue )
//     const  actualInputValue = await page.$eval(inputSelector, input => input.value);
//     expect(actualInputValue).toBe(inputValue);
// });

// test('inputcheck',async({page})=>{
//     await page.goto('https://myconnectverse.netlify.app/')
//     const inputSelector = 'input[type = text]'
//     const inputValue = 'yashi@gmail.com'
//     await page.type(inputSelector ,inputValue )
//     const  actualInputValue = await page.$eval(inputSelector, input => input.value);
//     expect(actualInputValue).toBe(inputValue);
// });

// test('inputcheck2',async({page})=>{
//         await page.goto('https://myconnectverse.netlify.app/')
//         const inputSelector = 'input[type = text]'
//         const inputValue = '@&**   @gmail.com'
//         await page.type(inputSelector ,inputValue )
//         const  actualInputValue = await page.$eval(inputSelector, input => input.value);
//         expect(actualInputValue).toBe(inputValue);
//     })

test('Login Test', async ({ page }) => {
    await page.goto('https://myconnectverse.netlify.app/');
    await page.fill('input[name="username"]', 'newuser@gmail.com');
    await page.fill('input[name="password"]', 'newuser@gmail.com');
    await page.click('button[type="submit"]');
    // await page.waitForNavigation();
    const dashboardTitle = await page.title();
    expect(dashboardTitle).toBe('ConnectVerse');
});

test('Main Page Feature Testing', async ({ page }) => {
    await login(page, 'username', 'password');
    await testFeature1(page);
    await testFeature2(page);
});












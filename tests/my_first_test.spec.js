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
    await page.fill('input[type="text"]', 'newuser@gmail.com');
    await page.fill('input[type="password"]', 'newuser@gmail.com');
    await page.click('button[type="submit"]');
    //  await page.waitForNavigation();
    const title = await page.textContent('.MuiTypography-root.MuiTypography-body1.css-15bj9oc');
    expect(title).toBe('ConnectVerse');
});

















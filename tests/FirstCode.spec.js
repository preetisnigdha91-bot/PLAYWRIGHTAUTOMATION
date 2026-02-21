const {test,expect}= require("@playwright/test");
test('MyFirstCode',async ({page}) => 
{
    await page.goto('http://naveenautomationlabs.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle("Welcome to Naveen AutomationLabs -")
});

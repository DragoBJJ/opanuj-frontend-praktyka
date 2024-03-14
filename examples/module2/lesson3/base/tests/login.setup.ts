import test, { expect } from '@playwright/test';



test("login into Wiki", async({page}) => {

await page.goto("/")

const MainPageNavigation = page.getByRole('navigation', { name: 'Personal tools' });

 await MainPageNavigation.getByRole("link", {name: "Log In"}).click();

await page.waitForURL(/.*Special:UserLogin.*/);

const LoginForm = page.locator('#userloginForm');

 await LoginForm.getByLabel("Username").fill(process.env.USERNAME!)
 await LoginForm.getByLabel("Password").fill(process.env.PASSWORD!)

await LoginForm.getByRole("button",{name: "Log In"}).click();


await expect(page).toHaveURL("/wiki/Main_Page");
await expect(MainPageNavigation).toContainText(process.env.USERNAME!,{ignoreCase: true});
})
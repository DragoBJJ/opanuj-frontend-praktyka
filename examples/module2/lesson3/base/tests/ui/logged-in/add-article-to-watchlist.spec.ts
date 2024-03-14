
import test, { expect } from '@playwright/test';

test("add article to watchlist", async({page}) => {

await page.goto("/")

await expect(page).toHaveURL("/wiki/Main_Page");

const MainPageNavigation = page.getByRole('navigation', { name: 'Personal tools' });

await expect(MainPageNavigation).toContainText(process.env.USERNAME!,{
  ignoreCase: true
});
})
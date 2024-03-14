import test, { expect } from '@playwright/test';
import { STORAGE_STATE } from '../../../../playwright.config';
import { MainPage } from '../pages/main.page';
import { URLs } from '../utils/constants';

test("login into Wiki", async({page}) => {

  const Main = new MainPage(page);

  await Main.navigateToMain();

await Main.goToLoginPage();

await Main.LoginToForm(process.env.USERNAME!, process.env.PASSWORD!);

await expect(page).toHaveURL(URLs.MAIN_PAGE);
await expect(Main.getNavigator()).toContainText(process.env.USERNAME!,{ignoreCase: true});

await page.context().storageState({path: STORAGE_STATE});
})
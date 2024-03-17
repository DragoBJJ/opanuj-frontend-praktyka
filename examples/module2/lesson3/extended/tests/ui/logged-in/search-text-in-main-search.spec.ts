import { expect,test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';


test("get to the first article the main search engine", async ({page})=> {
    const main = new MainPage(page);
    await main.navigate();
    await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Main_Page");

    await main.searchFor("Playwright");

    await main.getFirstSearchResult();

    await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Playwright");
  })
  
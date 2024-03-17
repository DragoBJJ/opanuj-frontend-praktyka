
import test, { expect } from '@playwright/test';
import { MainPage } from '../../../pages/main.page';
import { ArticlePage } from '../../../pages/article.page';



test.afterEach(async ({page})=> {
  const article = new ArticlePage(page);
  await article.clickUnwatchButton();

  await expect(article.getWatchButton()).toBeVisible();
})

test("add article to watchlist", async({page}) => {

const main = new MainPage(page);
const article = new ArticlePage(page);

await main.navigateToMain();

await main.goToFeatureArticle();

await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Jamie_Kalven");


await article.clickWatchButton();

await expect(article.getUnwatchButton()).toBeVisible();

})
import { expect,test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';


test("Searching for watchlist information in the Help Center", async ({page})=> {
    const main = new MainPage(page);
    await main.navigate();
    await main.goToCommunityPortal();
  
    await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Wikipedia:Community_portal");

    await main.goToHelpDesk();

    await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Wikipedia:Help_desk");


    await main.watchInputSearchFor("watchlist");

    await main.clickWatchButton();

    await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=watchlist&ns0=1");

  })
  
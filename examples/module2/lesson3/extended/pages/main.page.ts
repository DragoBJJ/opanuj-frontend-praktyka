import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly url = URLs.MAIN_PAGE;
  readonly navigation: Locator;
  private readonly featuredArticleExcerpt: Locator;
  private readonly searchInput: Locator;

  private readonly sideNav: Locator;
  private readonly helpDeskLink: Locator;

  private readonly watchInput: Locator;
  private readonly watchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });

    this.sideNav = page.getByRole("navigation", {
      "name": "Site",
    })

    this.helpDeskLink = page.getByRole('link', { name: 'Help desk', exact: true })
    this.featuredArticleExcerpt = page.locator('#mp-tfa');

    this.searchInput = page
      .getByRole('search')
      .getByRole('searchbox', { name: /Search Wikipedia/i });

     this.watchInput = page.getByRole('cell', { name: 'Search the frequently asked' }).getByRole('textbox')
     this.watchButton = page.getByRole('button', { name: 'Search the frequently asked' });
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigation.getByRole('link', { name: 'Log in' }).click();
  }

  goToCommunityPortal() {
    return this.sideNav.getByRole("link", {
      name: "Community portal"
    }).click();
  }

  goToHelpDesk() {
    return this.helpDeskLink.click();
  }

  async goToFeaturedArticle() {
    const linkToFeaturedArticle = this.featuredArticleExcerpt
      .getByRole('paragraph')
      .getByRole('link')
      .first();

    const articleHref = (await linkToFeaturedArticle.getAttribute('href'))!;

    await linkToFeaturedArticle.click();

    return this.page.waitForURL(`**${articleHref}`);
  }

  async searchFor(term: string) {
    return this.searchInput.fill(term);
  }

  async watchInputSearchFor(term: string) {
    return this.watchInput.fill(term);
  }

  async clickWatchButton() {
    await this.watchButton.click();
    const URL = "https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=watchlist&ns0=1";
    return this.page.waitForURL(`**${URL}`);
  }

  getSearchResults() {
    return this.page.getByRole('listbox', { name: /Search results/i });
  }

  getFirstSearchResult() {
    return this.getSearchResults().getByRole('option').first().click();
  }

  getNavigation() {
    return this.navigation;
  }
}

import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';



export class MainPage {
  private readonly page: Page;
  private readonly MAIN_URL = URLs.MAIN_PAGE;

  private readonly navigation: Locator;
  private readonly loginForm: Locator;

  private readonly userName: Locator;
  private readonly userPassword: Locator
  private readonly loginButton: Locator;
  private readonly rememberMeCheckBox: Locator;

  private readonly featureArticleExcerpt: Locator;


  constructor(page: Page) {
        this.page = page;
        this.navigation = page.getByRole("navigation", {
          name: "Personal tools"
        })
         this.loginForm = page.locator('#userloginForm');
         this.userName =  this.loginForm.getByLabel("Username");
         this.userPassword = this.loginForm.getByLabel("Password");
         this.loginButton = this.loginForm.getByRole("button", {name: "Log in"});
         this.rememberMeCheckBox = this.loginButton.locator("#wpRemember");

         this.featureArticleExcerpt = this.page.locator("#mp-tfa");
      }

      goToFeatureArticle() {
        return this.featureArticleExcerpt.getByRole("paragraph").getByRole('link').first().click();
      }

      async LoginToForm(username: string, password: string, rememberMe = false) {
        await this.fillUserName(username);
        await this.fillUserPassword(password);  
        await  this.clickLoginButton();

        if(rememberMe) await this.clickRememberMe();
        
      }

      async waitForUrl(url: string) {
        await this.page.waitForURL(url);
      }

      private clickRememberMe() {
        return this.rememberMeCheckBox.click();
      }
       
      private clickLoginButton() {
        return this.loginButton.click();
      }
  
      private fillUserName(username: string) {
        return this.userName.fill(username);
      }

      private fillUserPassword(username: string) {
        return this.userPassword.fill(username); 
      }

      getLoginForm() {
        return this.loginForm;
      }

      getNavigator() {
        return this.navigation;
      }

      navigateToMain() {
        return this.page.goto(this.MAIN_URL);
     }

     goToLoginPage() {
      return  this.navigation.getByRole("link", {name: "Log in"}).click();
     }

}
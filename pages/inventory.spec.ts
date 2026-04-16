import { Page, Locator } from '@playwright/test';
export class InventoryPage {
    readonly page: Page;
    readonly AddtocartButton1: Locator;
    readonly AddtocartButton2: Locator;   
    readonly AddtocartButton3: Locator;
    readonly AddtocartButton4: Locator;
    readonly AddtocartButton5: Locator;
    readonly AddtocartButton6: Locator;
    readonly CartButton: Locator;
    readonly twitterButton: Locator;
    readonly facebookButton: Locator;
    readonly linkedinButton: Locator;
    readonly menuButton: Locator;
    readonly logoutButton: Locator;
    readonly aboutButton: Locator;
    readonly allItemsButton: Locator
    readonly resetAppStateButton: Locator;
    constructor(page: Page){
        this.page =page;
        this.AddtocartButton1= page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.AddtocartButton2= page.getByTestId('add-to-cart-sauce-labs-bike-light');
        this.AddtocartButton3= page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt');
        this.AddtocartButton4= page.getByTestId('add-to-cart-sauce-labs-fleece-jacket');
        this.AddtocartButton5= page.getByTestId('add-to-cart-sauce-labs-onesie');
        this.AddtocartButton6= page.getByTestId('add-to-cart-test.allthethings()-t-shirt-(red)');
        this.CartButton= page.getByTestId('shopping-cart-link');
        this.twitterButton= page.getByTestId('social-twitter');
        this.facebookButton= page.getByTestId('social-facebook');
        this.linkedinButton= page.getByTestId('social-linkedin');
        this.menuButton= page.getByTestId('react-burger-menu-btn');
        this.logoutButton= page.getByTestId('logout_sidebar_link');
        this.aboutButton= page.getByTestId('about_sidebar_link');
        this.allItemsButton= page.getByTestId('inventory_sidebar_link');
        this.resetAppStateButton= page.getByTestId('reset_sidebar_link');

    }
    async addToCart(){
        await this.AddtocartButton1.click();
        await this.AddtocartButton2.click();
        await this.AddtocartButton3.click();
        await this.AddtocartButton4.click();
        await this.AddtocartButton5.click();
        await this.AddtocartButton6.click();
    }
    async goToCart() {
        await this.CartButton.click();
    }
    async goToTwitter(){
        await this.twitterButton.click();
    }
    async goToFacebook(){
        await this.facebookButton.click();
    }
    async goToLinkedIn(){
        await this.linkedinButton.click();
    }
    
    async logout(){
        await this.menuButton.click();
        await this.logoutButton.click();
    }
    async about(){
        await this.menuButton.click();
        await this.aboutButton.click();
    }
    async allItems(){
        await this.menuButton.click();
        await this.allItemsButton.click();
    }
    async resetAppState(){
        await this.menuButton.click();
        await this.resetAppStateButton.click();
    }

}
      
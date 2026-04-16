import { Page, Locator } from '@playwright/test';
export class cartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByTestId('checkout');
    }
    async continueCheckout() {
        await this.checkoutButton.click();
    }
}


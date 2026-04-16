import { Page, Locator } from '@playwright/test';
export class CheckoutCompletePage {
    readonly page: Page;
    readonly backButton: Locator;
    readonly completeHeader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.getByTestId('checkout-complete-container');
        this.backButton = page.getByTestId('back-to-products');
    }
    async backToProducts() {
        await this.backButton.click();
    }   
}
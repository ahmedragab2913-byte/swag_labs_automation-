import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly AddtocartButton1: Locator;
    readonly AddtocartButton2: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.AddtocartButton1 = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.AddtocartButton2 = page.getByTestId('add-to-cart-sauce-labs-bike-light');
        this.errorMessage = page.getByTestId('error');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    
}
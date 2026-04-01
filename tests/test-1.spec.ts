import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.spec'; // Ensure the path points to your POM file

test.describe('Login Tests', () => {

  test('User should be able to login with valid credentials', async ({ page }) => {
    // Initialize the Page Object
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.goto();

    // Step 2: Use the login method from your POM
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 3: Assertion (Verify that login was successful)
    // For example, checking if the URL changed or a logout button is visible
    await expect.soft(loginPage.AddtocartButton1).toHaveText('Add to cart'); // Example assertion, adjust as needed
    await expect.soft(loginPage.AddtocartButton2).toBeEnabled(); // Example assertion, adjust as needed
  });
  test('User shouldnt be able to login with invalid credentials', async ({ page }) => {
    // Initialize the Page Object
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.goto();

    // Step 2: Use the login method from your POM
    await loginPage.login('notstandard_user', 'secret_sauce');

    // Step 3: Assertion (Verify that login was successful)
    // For example, checking if the URL changed or a logout button is visible
    await expect.soft(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service'); // Example assertion, adjust as needed
    
  });
  test('User shouldnt be able to login with empty credentials', async ({ page }) => {          
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.goto();                                       
    await loginPage.login('', ''); // Empty credentials

    // Step 3: Assertion (Verify that login was successful)
    // For example, checking if the URL changed or a logout button is visible
    await expect.soft(loginPage.errorMessage).toHaveText('Epic sadface: Username is required'); // Example assertion, adjust as needed
  });
test('User shouldnt be able to login with locked credentials', async ({ page }) => {
    // Initialize the Page Object
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.goto();

    // Step 2: Use the login method from your POM
    await loginPage.login('locked_out_user', 'secret_sauce');

    // Step 3: Assertion (Verify that login was successful)
    // For example, checking if the URL changed or a logout button is visible
    await expect.soft(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.'); // Example assertion, adjust as needed
    
  });
  test('User shouldnt be able to login with problematic credentials', async ({ page }) => {
    // Initialize the Page Object
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to the login page
    await loginPage.goto();

    // Step 2: Use the login method from your POM
    await loginPage.login('problem_user', 'secret_sauce');

    // Step 3: Assertion (Verify that login was successful)
    // For example, checking if the URL changed or a logout button is visible
    await expect.soft(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service'); // Example assertion, adjust as needed
    
  });
});
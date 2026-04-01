import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage.spec'; // Ensure the path points to your POM file
import { InventoryPage } from '../pages/inventory.spec';

test.describe('End to End Tests', () => {

  test('User should be able to login and add items to cart', async ({ page }) => {
    // Initialize the Page Objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    // Step 1: Navigate to the login page
    await loginPage.goto();
    // Step 2: Use the login method from your POM
    await loginPage.login('standard_user', 'secret_sauce');
    // Step 3: Add items to the cart using the InventoryPage POM
    await inventoryPage.addToCart();
    // Step 4: Go to the cart
    await inventoryPage.goToCart();
    // Step 5: Assertion (Verify that items are added to the cart)
    
    await expect.soft(inventoryPage.CartButton).toHaveText('6'); // Example assertion, adjust as needed
  });
});            
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage'; // Ensure the path points to your POM file
import { InventoryPage } from '../pages/inventory';
import { cartPage } from '../pages/cart';
import { CheckoutStepOnePage } from '../pages/checkout-step-one';
import { CheckoutStepTwoPage } from '../pages/checkout-step-two';
import { CheckoutCompletePage } from '../pages/checkout-complete';
test.describe('End to End Tests', () => {

  test('complete full purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartpage = new cartPage(page);
  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect.soft(page).toHaveURL(/inventory/);

  await inventoryPage.addToCart();
  await expect.soft(inventoryPage.CartButton).toHaveText('6');

  await inventoryPage.goToCart();
  await expect.soft(page).toHaveURL(/cart/);

  await cartpage.continueCheckout();
  await expect.soft(page).toHaveURL(/checkout-step-one/);

  await expect.soft(checkoutStepOnePage.firstNameInput).toBeVisible();

  await checkoutStepOnePage.fillCheckoutInfo('John', 'Doe', '12345');

  await expect.soft(page).toHaveURL(/checkout-step-two/);

  await checkoutStepTwoPage.finishCheckout();
  await expect.soft(checkoutCompletePage.completeHeader).toBeVisible();

  await expect.soft(page).toHaveURL(/checkout-complete/);
  //await expect.soft(checkoutCompletePage.completeHeader).toBeVisible();
  await checkoutCompletePage.backToProducts();
  await expect.soft(page).toHaveURL(/inventory/);

});
});            
import { test, expect } from '@playwright/test';

// Test data 
const STANDARD_USER = {
  username: process.env.CHALLENGE_STANDARD_USER,
  password: process.env.CHALLENGE_STANDARD_PASSWORD
};

test.describe('SauceDemo Happy Path Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.CHALLENGE_URL);
  });

  test('add items to cart', async ({ page }) => {
    // Login first
    await page.fill('[data-test="username"]', STANDARD_USER.username);
    await page.fill('[data-test="password"]', STANDARD_USER.password);
    await page.click('#login-button');
    
    // Add multiple items to cart
    await page.click('#item_0_title_link');
    await page.getByRole('button', { name: /add to cart/i }).click();
    
    await page.getByRole('button', {name: /open menu/i }).click();
     await page.click('#inventory_sidebar_link');
    
    await page.click('#item_4_title_link');
    await page.getByRole('button', { name: /add to cart/i }).click();
    
    // Verify cart count
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('2');
    
    // Go to cart and verify items
    await page.click('.shopping_cart_link');
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
  });
});
import { test, expect } from '@playwright/test';

// Test data 
const STANDARD_USER = {
  username: 'standard_user',
  password: 'secret_sauce'
};

test.describe('SauceDemo Happy Path Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
  });

  test('successful login and logout', async ({ page }) => {
    // Login
    await page.fill('[data-test="username"]', STANDARD_USER.username);
    await page.fill('[data-test="password"]', STANDARD_USER.password);
    await page.click('#login-button');
    
    // Verify successful login
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    await expect(page.locator('.app_logo')).toBeVisible();
    
    // Logout
    await page.getByRole('button', {name: /open menu/i }).click();
    await page.click('#logout_sidebar_link');
    
    // Verify logout
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html');
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
import { test, expect } from "@playwright/test";

test("First programme", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
//   await page.pause();
  await page.locator("//input[@id='user-name']").fill("standard_user");
  await page.locator("//input[@id='password']").fill("secret_sauce");
  await expect(page.getByText("Login")).toBeEnabled();
  await page.locator("//input[@name='login-button']").click();

  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(
    page.locator("//span[@class='shopping_cart_badge']")
  ).toHaveText("1");
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('dev');
  await page.locator('[data-test="lastName"]').fill('dut');
  await page.locator('[data-test="postalCode"]').fill('12345');
// cancel button to be enabled and cpnitnue button to be clicked
  await expect(page.getByRole('button',{name:"cancel"})).toBeVisible();
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator("//div[@class='inventory_item_name']")).toHaveText("Sauce Labs Backpack");
});

// test("Second programme",async({page})=>{

// });

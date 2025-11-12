import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('cmf');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('#a-autoid-1-anounce').click();
});
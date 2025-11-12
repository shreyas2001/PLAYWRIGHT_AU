import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.reload();
  // await page.pause()
  const dismisBtn = page.locator('//input[@data-action-type="DISMISS"]');
  if (await dismisBtn.isVisible()) {
    await dismisBtn.click();
  }
  await page.locator('//input[@id="twotabsearchtextbox"]').click();
  await page.locator('//input[@id="twotabsearchtextbox"]').fill('cmf headphone');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

// check for dismiss again
  if (await dismisBtn.isVisible()) {
    await dismisBtn.click();
  }
  await expect(page.getByRole('heading', { name: 'Results', exact: true })).toBeVisible();

  await page.getByRole('link', { name: 'CMF by Nothing Headphone Pro Active Noise Canceling Wireless Headphones Bluetooth 5.4 Over The Ear Headset, 50H ANC Playtime, Bass&Treble Slider, Custom EQ&Spatial Audio, Hi-Res LDAC, Dark Grey', exact: true })

  // await expect(page.getByRole('link', { name: 'Sponsored Ad - CMF by Nothing' })).toContain('5.4');
  await page.locator('//button[@id="a-autoid-1-announce"]').click();

  // clicking go to cart
  await expect(page.locator('//a[contains(text(),"Go to Cart")]')).toHaveText('Go to Cart');
});
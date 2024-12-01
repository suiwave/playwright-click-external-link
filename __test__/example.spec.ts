import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Click the get started link.
  await page.getByRole('link', { name: 'youtube' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: '[テレビ体操] ラジオ体操第1 | NHK' })).toBeVisible();
  expect(await expect(page.getByRole('heading', {
    name: '[テレビ体操] ラジオ体操第1 | NHK'
  })).toBeVisible({
    timeout: 60000
  }))
});

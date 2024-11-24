import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  console.log('Running test');
  await page.goto('http://localhost:5173');
  console.log('Navigated to localhost:5173');
  console.log('Loading template');
  await page.getByRole('button', { name: 'Load Template' }).click();

  console.log('Waiting for template to load');
  await page.waitForTimeout(3000); // wait 3 seconds for the template to load
  console.log('Template loaded');
  console.log('Notification should be visible');
  await page.waitForTimeout(2000); // Emulate wait till notification disappears,
  console.log('Notification disappeared');
  console.log('Auto save should be triggered');
  await page.waitForTimeout(5000); // Emulate wait till custom autosave finishes
  console.log('Auto save finished');

  console.log('Taking screenshot');
  await expect(page.locator("div#root")).toHaveScreenshot('polotno-e2e.png');
});

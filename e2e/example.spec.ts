import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});
test.describe('PokéAPI Automation Test (L3)', () => {
    
    test('Validate Pikachu API Data', async ({request}) => {
        const response = await request.get('https://pokeapi.co/api/v2/pokemon/pikachu');

  // 1. Validate response status is 200
  expect(response.status()).toBe(200);

  // Parse response body
  const responseBody = await response.json();

  // 2. Validate name is "pikachu"
  expect(responseBody.name).toBe('pikachu');

  // 3. Validate ID is 25
  expect(responseBody.id).toBe(25);

  // 4. Validate height is 4 (decimeters)
  expect(responseBody.height).toBe(4);

  // 5. Validate Pikachu has at least two abilities
  expect(responseBody.abilities.length).toBeGreaterThanOrEqual(2);
    });
  });

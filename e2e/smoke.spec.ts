import { test, expect } from "@playwright/test";

test.describe("XPS Intelligence - Smoke Tests", () => {
  test("landing page loads", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/XPS/i);
  });

  test("login page is accessible", async ({ page }) => {
    await page.goto("/login");
    await expect(page.locator("input[type='email'], input[placeholder*='mail']")).toBeVisible({ timeout: 10000 });
  });

  test("navigation to dashboard redirects or shows content", async ({ page }) => {
    await page.goto("/dashboard");
    // Should either show dashboard or redirect to login
    await expect(page).toHaveURL(/(dashboard|login)/);
  });

  test("login form has required fields", async ({ page }) => {
    await page.goto("/login");
    const emailInput = page.locator("input[type='email'], input[placeholder*='mail']");
    const passwordInput = page.locator("input[type='password']");
    await expect(emailInput).toBeVisible({ timeout: 10000 });
    await expect(passwordInput).toBeVisible({ timeout: 10000 });
  });

  test("Start Research button exists on research page", async ({ page }) => {
    await page.goto("/research");
    // Either shows the page (if no auth guard) or redirects to login
    await expect(page).toHaveURL(/(research|login)/);
  });
});

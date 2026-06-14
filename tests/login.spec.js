import { test, expect } from "@playwright/test";
import { Login_page } from "../Pages/Login_page";
import { Home_page } from "../pages/Home_page";
test("Login Test case", async function ({ page }) {
  await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");

  const loginoage = new Login_page(page);
  await loginoage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

import { test, expect } from "@playwright/test";
import { Login_page } from "../Pages/Login_page";
import { Home_page } from "../pages/Home_page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  const loginpage = new Login_page(page);
  await loginpage.login("standard_user", "secret_sauce");
});

test("Burger Menu Test", async ({ page }) => {
  const homepage = new Home_page(page);
  await homepage.burgermenubutton();
  await expect(homepage.burgermenulist).toBeVisible();
  await homepage.burgermenubuttonclose();

  await homepage.burgermenubutton();
  await expect(homepage.allitems).toBeVisible();
  await expect(homepage.about).toBeVisible();
  await expect(homepage.logout).toBeVisible();
  await expect(homepage.resetappstate).toBeVisible();
  await homepage.burgermenubuttonclose();

  await homepage.burgermenubutton();
  await homepage.Aboutpage_Click();
  await expect(page).toHaveURL("https://saucelabs.com/");
});

test("Cart button redirection", async ({ page }) => {
  const homepage1 = new Home_page(page);
  await homepage1.Clikon_thecart();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
});

test("Dropdown", async ({ page }) => {
  const homepage2 = new Home_page(page);
  await homepage2.Dropdown("lohi");

  const prices = await homepage2.pricelist.allTextContents();
  const actualPrices = prices.map((price) => Number(price.replace("$", "")));
  const expectedPrices = [...actualPrices].sort((a, b) => a - b);
  expect(actualPrices).toEqual(expectedPrices);
});

test("Main product page", async ({ page }) => {
  const homepage3 = new Home_page(page);
  await homepage3.Dropdown("az");
  await homepage3.Main_productpage();
  await expect(page).toHaveURL(
    "https://www.saucedemo.com/inventory-item.html?id=4",
  );
});

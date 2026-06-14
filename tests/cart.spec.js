import { test, expect } from "@playwright/test";
import { Login_page } from "../Pages/Login_page";
import { Cart_page } from "../pages/Cart_page";
import { Home_page } from "../pages/Home_page";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  const loginpage = new Login_page(page);
  await loginpage.login("standard_user", "secret_sauce");
});

test("verify the bedge and button", async ({ page }) => {
  const cartpage = new Cart_page(page);

  await cartpage.addtocartproduct();
  const verifybedge = await cartpage.verifythebedgeofproduct();
  expect(verifybedge).toBe("1");

  const removertext = await cartpage.verifytheremovebutton();
  expect(removertext).toBe("Remove");

  await cartpage.remove_product();
  await expect(cartpage.verifybedge).toHaveCount(0);
  await expect(cartpage.addtocart).toHaveText("Add to cart");
});

test("remove product from detail page", async ({ page }) => {
  const cartpage2 = new Cart_page(page);

  await cartpage2.addtocartproduct();

  await cartpage2.detail_page();

  await expect(cartpage2.removedetailpage).toHaveText("Remove");

  await cartpage2.remove_d_page();

  await expect(cartpage2.addtocartdetailpage).toHaveText("Add to cart");

  await cartpage2.back_to_product();

  await expect(cartpage2.addtocart).toHaveText("Add to cart");
});

test("verify successful checkout process", async ({ page }) => {
  const cartpage3 = new Cart_page(page);
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await cartpage3.addtocartproduct();

  await cartpage3.cartpagedetail();

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  await cartpage3.cpntinue_shopping();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await cartpage3.cartpagedetail();

  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  await cartpage3.remove_product();
  await cartpage3.cpntinue_shopping();
  await cartpage3.addtocartproduct();
  await cartpage3.cartpagedetail();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  await cartpage3.checkout_button();
  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-step-one.html",
  );
  await cartpage3.cancle_button();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  await cartpage3.checkout_button();
  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-step-one.html",
  );

  await cartpage3.contine_button();
  const error = await cartpage3.error_message();
  expect(error).toBe("Error: First Name is required");

  await cartpage3.first_name("Pathiv");
  await cartpage3.contine_button();
  const error1 = await cartpage3.error_message();
  expect(error1).toBe("Error: Last Name is required");

  await cartpage3.last_namee("Bhavsar");
  await cartpage3.contine_button();
  const error3 = await cartpage3.error_message();
  expect(error3).toBe("Error: Postal Code is required");

  await cartpage3.Postal_code("20202");
  await cartpage3.contine_button();
  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-step-two.html",
  );
  await cartpage3.finish_nutton();

  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-complete.html",
  );

  await cartpage3.back_to_product();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  const home = new Home_page(page);

  await home.burgermenubutton();
  await home.log_out();

  await expect(page).toHaveURL("https://www.saucedemo.com/");
});

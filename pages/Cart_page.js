export class Cart_page {
  constructor(page) {
    this.page = page;
    this.addtocart = page.locator("#add-to-cart-sauce-labs-backpack");
    this.verifybedge = page.locator(".shopping_cart_badge");
    this.removebutton = page.locator("#remove-sauce-labs-backpack");
    this.removeproductbutton = page.locator("#remove-sauce-labs-backpack");
    this.backtoproduct = page.locator("#back-to-products");
    this.producttitle = page.locator("#item_4_title_link");
    this.removedetailpage = page.locator("#remove");
    this.addtocartdetailpage = page.locator("#add-to-cart");
    this.cartpage = page.locator(".shopping_cart_badge");
    this.continueshopping = page.locator("#continue-shopping");
    this.checkout = page.locator("#checkout");
    this.cancle = page.locator("#cancel");
    this.error = page.locator('[data-test="error"]');
    this.contine = page.locator("#continue");
    this.firstname = page.locator("#first-name");
    this.postal = page.locator("#postal-code");
    this.last_name1 = page.locator("#last-name");
    this.finish = page.locator("#finish");
    this.backtop = page.locator("#back-to-products");
  }

  async addtocartproduct() {
    await this.addtocart.click();
  }

  async verifythebedgeofproduct() {
    return await this.verifybedge.textContent();
  }
  async verifytheremovebutton() {
    return await this.removebutton.textContent();
  }

  async remove_product() {
    await this.removebutton.click();
  }

  async back_to_product() {
    await this.backtoproduct.click();
  }
  async detail_page() {
    await this.producttitle.click();
  }

  async remove_d_page() {
    await this.removedetailpage.click();
  }

  async addtocart_detailpage() {
    await this.addtocartdetailpage.click();
  }
  // async cartpagedetail() {
  //   await this.cartpage.click();
  // }
  //   async cartpagedetail() {
  //   console.log("URL:", await this.page.url());

  //   const count = await this.page.locator("#shopping_cart_link").count();
  //   console.log("Cart Count:", count);

  //   await this.page.pause();
  // }

  async cartpagedetail() {
    //await this.page.pause();
    await this.cartpage.click();
  }
  async cpntinue_shopping() {
    await this.continueshopping.click();
  }

  async checkout_button() {
    await this.checkout.click();
  }

  async cancle_button() {
    await this.cancle.click();
  }

  async error_message() {
    return await this.error.textContent();
  }

  async contine_button() {
    await this.contine.click();
  }
  async first_name(name) {
    await this.firstname.fill(name);
  }

  async last_namee(lname) {
    await this.last_name1.fill(lname);
  }

  async Postal_code(pcode) {
    await this.postal.fill(pcode);
  }

  async finish_nutton() {
    await this.finish.click();
  }

  async back_to_product() {
    await this.backtop.click();
  }
}

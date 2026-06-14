export class Home_page {
  constructor(page) {
    this.page = page;
    this.burgermenuopen = page.locator("#react-burger-menu-btn");
    this.burgermenuclose = page.locator("#react-burger-cross-btn");
    this.burgermenulist = page.locator(".bm-menu");

    this.allitems = page.locator("#inventory_sidebar_link");
    this.about = page.locator("#about_sidebar_link");
    this.logout = page.locator("#logout_sidebar_link");
    this.resetappstate = page.locator("#reset_sidebar_link");

    this.cart = page.locator(".shopping_cart_link");
    this.dropdown = page.locator(".product_sort_container");
    this.pricelist = page.locator(".inventory_item_price");

    this.productlink = page.locator("#item_4_title_link ");
    this.lg = page.locator("#logout_sidebar_link");
  }
  async burgermenubutton() {
    await this.burgermenuopen.click();
  }
  async burgermenubuttonclose() {
    await this.burgermenuclose.click();
  }

  async Aboutpage_Click() {
    await this.about.click();
  }
  async Clikon_thecart() {
    await this.cart.click();
  }

  async Dropdown(option) {
    await this.dropdown.selectOption(option);
  }
  async Main_productpage() {
    await this.productlink.click();
  }
  async log_out() {
    await this.lg.click();
  }
}

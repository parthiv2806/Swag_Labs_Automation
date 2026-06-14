export class Login_page {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.lgbutton = page.locator("#login-button");
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.lgbutton.click();
  }
}

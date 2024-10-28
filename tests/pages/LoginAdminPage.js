const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("http://localhost:3000/admin/login");
    const loginForm = await this.page.locator(".login-form");
    await expect(loginForm).toBeVisible();
  }
}

module.exports = LoginPage;

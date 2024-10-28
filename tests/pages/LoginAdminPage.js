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

  async submitLoginForm(email, password) {
    await this.page.getByPlaceholder("E-mail").fill(email);
    await this.page.getByPlaceholder("Senha").fill(password);
    await this.page.getByText("Entrar").click();
  }
  q;
  async checkLoggedIn() {
    await this.page.waitForLoadState("domcontentloaded");
    await expect(this.page).toHaveURL(/\/admin\/movies/);
  }

  async checkHasToastText(message) {
    const toast = await this.page.locator(".toast");
    await expect(toast).toHaveText(message);
    await expect(toast).not.toBeVisible({ timeout: 5000 });
  }
}

module.exports = LoginPage;

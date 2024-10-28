const { expect } = require("@playwright/test");

class LandingPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("http://localhost:3000");
  }
  async openLeadModal() {
    await this.page.getByRole("button", { name: /Aperte o play/ }).click();
    const modal = await this.page.getByTestId("modal");
    await expect(modal.isVisible()).toBeTruthy();
  }
  async submitLeadForm(name, email) {
    await this.page.locator("#name").fill(name);
    await this.page.locator("#email").fill(email);
    await this.page
      .getByTestId("modal")
      .getByText("Quero entrar na fila!")
      .click();
  }

  async checkHasAlertText(text) {
    const alert = await this.page.locator(".alert");
    await expect(alert).toHaveText(text);
  }
}

module.exports = LandingPage;

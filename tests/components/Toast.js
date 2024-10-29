const { expect } = require("@playwright/test");

export class ToastComponent {
  constructor(page) {
    this.page = page;
  }

  async checkHasText(message) {
    const toast = await this.page.locator(".toast");
    await expect(toast).toHaveText(message);
    await expect(toast).not.toBeVisible({ timeout: 5000 });
  }
}

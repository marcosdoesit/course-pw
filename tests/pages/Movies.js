import { expect } from "@playwright/test";

class Movies {
  constructor(page) {
    this.page = page;
  }

  async checkLoggedIn() {
    await this.page.waitForLoadState("domcontentloaded");
    await expect(this.page).toHaveURL(/\/admin\/movies/);
  }
}

module.exports = Movies;

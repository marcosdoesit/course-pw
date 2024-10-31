import { expect } from '@playwright/test';

export class MoviesPage {
  constructor(page) {
    this.page = page;
  }

  async checkLoggedIn() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(/\/admin\/movies/);
  }

  async create(title, overview, company, releaseYear) {

  }
}

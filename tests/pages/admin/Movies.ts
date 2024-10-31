import { ToastComponent } from '@components/Toast';
import { expect, Page } from '@playwright/test';

export class MoviesPage {
  private readonly page: Page;
  private readonly toast: ToastComponent;

  constructor(page: Page) {
    this.page = page;
    this.toast = new ToastComponent(page);
  }

  async checkLoggedIn() {
    await this.page.waitForURL(/\/admin\/movies/);
    await expect(this.page).toHaveURL(/\/admin\/movies/);
  }

  async create(
    title: string,
    overview: string,
    company: string,
    releaseYear: string
  ) {
    await this.page.click('a[href*="register"]');
    await this.page.waitForURL(/register/i);

    await this.page.fill('#title', title);
    await this.page.fill('#overview', overview);

    await this.page.locator('#select_company_id').click();
    await this.page
      .locator('.react-select__option')
      .filter({
        hasText: company,
      })
      .click();

    await this.page.locator('#select_year').click();
    await this.page
      .locator('.react-select__option')
      .filter({
        hasText: releaseYear,
      })
      .click();

    await this.page.click('button:has-text("Cadastrar")');

    await this.toast.checkContainText(/sucesso/);
  }
}

import { Page, expect } from '@playwright/test';

export class LandingPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('http://localhost:3000');
  }
  async openLeadModal() {
    await this.page
      .getByRole('button', { name: /Aperte o play/ })
      .click();
    const modal = this.page.getByTestId('modal');
    await expect(modal.isVisible()).toBeTruthy();
  }
  async submitLeadForm(name?: string, email?: string) {
    await this.page.locator('#name').fill(name);
    await this.page.locator('#email').fill(email);
    await this.page
      .getByTestId('modal')
      .getByText('Quero entrar na fila!')
      .click();
  }

  async checkHasAlertText(text: string | RegExp | RegExp[]) {
    const alert = this.page.locator('.alert');
    await expect(alert).toHaveText(text);
  }
}

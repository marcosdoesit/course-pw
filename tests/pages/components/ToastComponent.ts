import { expect, Page } from '@playwright/test';

export class ToastComponent {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkContainText(
    text: string | string[] | RegExp | RegExp[]
  ) {
    const toast = this.page.locator('.toast');
    await expect(toast).toContainText(text);
    await expect(toast).not.toBeVisible({ timeout: 5000 });
  }
}

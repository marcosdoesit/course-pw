import { ToastComponent } from '@pages/components/ToastComponent';
import { BrowserContext, Page } from '@playwright/test';

export type ToastFixtures = {
  context: BrowserContext;
  page: Page;
  toast: ToastComponent;
};

const toastFixtures = {
  toast: async ({ page }, use) => {
    const toast = new ToastComponent(page);
    await use(toast);
  },
};

export { toastFixtures };


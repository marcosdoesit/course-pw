import { ToastComponent } from '@pages/components/ToastComponent';
import { Page } from '@playwright/test';

type ToastFixtures = {
  toast: (
    { page }: { page: Page },
    use: (toast: ToastComponent) => Promise<void>
  ) => Promise<void>;
};

const toastFixtures: ToastFixtures = {
  toast: async ({ page }, use) => {
    const toast = new ToastComponent(page);
    await use(toast);
  },
};

export { toastFixtures };

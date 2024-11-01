import { LoginAdminPage } from '@pages/admin/Login';
import { BrowserContext, Page } from '@playwright/test';

export type LoginFixtures = {
  context: BrowserContext;
  page: Page;
  login: LoginAdminPage;
};

const loginFixtures = {
  login: async ({ page }, use) => {
    const login = new LoginAdminPage(page);
    await use(login);
  },
};

export { loginFixtures };

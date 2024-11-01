import { LoginAdminPage } from '@pages/admin/Login';
import { Page } from '@playwright/test';

type LoginFixtures = {
  login: (
    { page }: { page: Page },
    use: (login: LoginAdminPage) => Promise<void>
  ) => Promise<void>;
};

const loginFixtures: LoginFixtures = {
  login: async ({ page }, use) => {
    const login = new LoginAdminPage(page);
    await use(login);
  },
};

export { loginFixtures };

import { LoginAdminPage } from '@pages/admin/Login';
import { MoviesPage } from '@pages/admin/Movies';
import { ToastComponent } from '@pages/components/ToastComponent';
import { LandingPage } from '@pages/landing/Leeds';
import {
  test as baseTest,
  BrowserContext,
  Page,
} from '@playwright/test';
import { landingFixtures } from './landingContext';
import { loginFixtures } from './loginContext';
import { moviesFixtures } from './moviesContext';
import { toastFixtures } from './toastContext';

type AppFixtures = {
  context: BrowserContext;
  page: Page;
  login: LoginAdminPage;
  toast: ToastComponent;
  movies: MoviesPage;
  landing: LandingPage;
};

const test = baseTest.extend<AppFixtures>({
  ...loginFixtures,
  ...moviesFixtures,
  ...landingFixtures,
  ...toastFixtures,
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

export { test };

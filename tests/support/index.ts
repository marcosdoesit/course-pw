import { test as base, Page } from '@playwright/test';

import { ToastComponent } from '@components/Toast';
import { LoginAdminPage } from '@pages/admin';
import { MoviesPage } from '@pages/admin/Movies';
import { LandingPage } from '@pages/landing/Leeds';

type CustomPage = Page & {
  login: LoginAdminPage;
  toast: ToastComponent;
  movies: MoviesPage;
  landing: LandingPage;
};

const test = base.extend<{ page: CustomPage }>({
  page: async (
    { page },
    use: (page: CustomPage) => Promise<void>
  ) => {
    const context: CustomPage = page;

    context['login'] = new LoginAdminPage(page);
    context['toast'] = new ToastComponent(page);
    context['movies'] = new MoviesPage(page);
    context['landing'] = new LandingPage(page);

    await use(context);
  },
});

export { test };


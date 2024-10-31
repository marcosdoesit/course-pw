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
    await use({
      ...page,
      landing: new LandingPage(page),
      login: new LoginAdminPage(page),
      toast: new ToastComponent(page),
      movies: new MoviesPage(page),
    });
  },
});

export { test };


import { MoviesPage } from '@pages/admin/Movies';
import { BrowserContext, Page } from '@playwright/test';

export type MovieFixtures = {
  context: BrowserContext;
  page: Page;
  movies: MoviesPage;
};

const moviesFixtures = {
  movies: async ({ page }, use) => {
    const movies = new MoviesPage(page);
    await use(movies);
  },
};

export { moviesFixtures };


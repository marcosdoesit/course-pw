import { MoviesPage } from '@pages/admin/Movies';
import { Page } from '@playwright/test';

type MoviesFixtures = {
  movies: (
    { page }: { page: Page },
    use: (movies: MoviesPage) => Promise<void>
  ) => Promise<void>;
};

const moviesFixtures: MoviesFixtures = {
  movies: async ({ page }, use) => {
    const movies: MoviesPage = new MoviesPage(page);
    await use(movies);
  },
};

export { moviesFixtures };


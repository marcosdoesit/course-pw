import { test } from '@playwright/test';

import { LoginAdminPage } from '@pages/admin';
import { MoviesPage } from '@pages/admin/Movies';

import { ToastComponent } from '@components/Toast';

import { Movie } from '@support/types';
import { runQuery } from '@support/db';

const moviesData: Movie = require('@support/fixtures/movies.json');

let loginPage: LoginAdminPage,
  toast: ToastComponent,
  moviesPage: MoviesPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginAdminPage(page);
  toast = new ToastComponent(page);
  moviesPage = new MoviesPage(page);
});

test('Admin can add a movie', async ({ page }) => {
  const movie = moviesData.guerra_mundial_z;
  await runQuery(`DELETE FROM movies WHERE title = '${movie.title}'`);

  await loginPage.open();
  await loginPage.submitLoginForm();
  await moviesPage.checkLoggedIn();

  await moviesPage.create(
    movie.title,
    movie.overview,
    movie.company,
    String(movie.releaseYear)
  );
});

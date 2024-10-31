import { test } from '@playwright/test';

import { LoginAdminPage } from '@pages/admin';
import { MoviesPage } from '@pages/admin/Movies';

import { ToastComponent } from '@components/Toast';

import { Movie } from '@support/types';

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
  await loginPage.open();
  await loginPage.submitLoginForm();
  await moviesPage.checkLoggedIn();

  const movie = moviesData.guerra_mundial_z;

  console.log(movie);
  await moviesPage.create(
    movie.title,
    movie.overview,
    movie.company,
    String(movie.releaseYear)
  );

  await page.click('button:has-text("Cadastrar")');
});

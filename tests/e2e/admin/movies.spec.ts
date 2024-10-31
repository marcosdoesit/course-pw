import { test } from '@playwright/test';

import { LoginAdminPage } from '@pages/admin';
import { MoviesPage } from '@pages/admin/Movies';

import { ToastComponent } from '@components/Toast';

import moviesData from '@support/fixtures/movies.json';

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

  const movie = moviesData[0];

  await moviesPage.create(
    movie.title,
    movie.description,
    movie.company,
    movie.releaseYear
  );

  await page.click('button:has-text("Cadastrar")');
});


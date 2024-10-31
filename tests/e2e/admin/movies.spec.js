const { test } = require('@playwright/test');

import { LoginAdminPage } from '@pages/admin';
import { MoviesPage } from '@pages/admin/Movies';

import { ToastComponent } from '@components/Toast';

let loginPage, toast, moviesPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginAdminPage(page);
  toast = new ToastComponent(page);
  moviesPage = new MoviesPage(page);
});

test('Admin can add a movie', async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm();
  await moviesPage.checkLoggedIn();
});


import { test } from '@playwright/test';
import { ToastComponent } from '@components/Toast';
import { LoginAdminPage } from '@pages/admin';
import { MoviesPage } from '@pages/admin/Movies';

let loginPage: LoginAdminPage,
  toast: ToastComponent,
  moviesPage: MoviesPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginAdminPage(page);
  toast = new ToastComponent(page);
  moviesPage = new MoviesPage(page);
});

/* positive tests */
test('Should login as admin', async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm();
  await moviesPage.checkLoggedIn();
});

/* negative tests */
// wrong tests
test("Shouldn't login with wrong pass", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm(
    'admin@zombieplus.com',
    'wrongPassword'
  );
  await toast.checkContainText(/Ocorreu um erro/);
});

test("Shouldn't login with wrong mail", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm('marcos.mail', 'randomPassword');
  await loginPage.checkAlertHasText(/Email incorreto/);
});

// empty tests
test("Shouldn't login with empty mail", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm('', 'wrongPassword');
  await loginPage.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty password", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm('marcosfromrio@protonmail.com', '');
  await loginPage.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty data", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm('', '');
  await loginPage.checkAlertHasText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

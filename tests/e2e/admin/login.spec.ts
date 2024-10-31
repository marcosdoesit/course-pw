import { test } from '@support/index';

/* positive tests */
test('Should login as admin', async ({ page }) => {
  await page.login.open();
  await page.login.submitLoginForm();
  await page.movies.checkLoggedIn();
});

/* negative tests */
// wrong tests
test("Shouldn't login with wrong pass", async ({ page }) => {
  await page.login.open();
  await page.login.submitLoginForm(
    'admin@zombieplus.com',
    'wrongPassword'
  );
  await page.toast.checkContainText(/Ocorreu um erro/);
});

test("Shouldn't login with wrong mail", async ({ page }) => {
  await page.login.open();
  await page.login.submitLoginForm('marcos.mail', 'randomPassword');
  await page.login.checkAlertHasText(/Email incorreto/);
});

// empty tests
test("Shouldn't login with empty mail", async ({ page }) => {
  await page.login.open();
  await page.login.submitLoginForm('', 'wrongPassword');
  await page.login.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty password", async ({ page }) => {
  await page.login.open();
  await page.login.submitLoginForm(
    'marcosfromrio@protonmail.com',
    ''
  );
  await page.login.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty data", async ({ page }) => {
  await page.login.open();
  await page.login.submitLoginForm('', '');
  await page.login.checkAlertHasText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

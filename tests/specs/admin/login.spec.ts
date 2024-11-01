import { test } from '@contexts/appContexts';

/* positive tests */
test('Should login as admin', async ({ login, movies }) => {
  await login.open();
  await login.submitLoginForm();
  await movies.checkLoggedIn();
});

/* negative tests */
// wrong tests
test("Shouldn't login with wrong pass", async ({ login, toast }) => {
  await login.open();
  await login.submitLoginForm(
    'admin@zombieplus.com',
    'wrongPassword'
  );
  await toast.checkContainText(/Ocorreu um erro/);
});

test("Shouldn't login with wrong mail", async ({ login }) => {
  await login.open();
  await login.submitLoginForm('marcos.mail', 'randomPassword');
  await login.checkAlertHasText(/Email incorreto/);
});

// empty tests
test("Shouldn't login with empty mail", async ({ login }) => {
  await login.open();
  await login.submitLoginForm('', 'wrongPassword');
  await login.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty password", async ({ login }) => {
  await login.open();
  await login.submitLoginForm('marcosfromrio@protonmail.com', '');
  await login.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty data", async ({ login }) => {
  await login.open();
  await login.submitLoginForm('', '');
  await login.checkAlertHasText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

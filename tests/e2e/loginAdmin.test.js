const { test } = require("@playwright/test");
const LoginAdminPage = require("../pages/LoginAdminPage");
const { Toast } = require("../pages/Components");

let loginPage, toast;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginAdminPage(page);
  toast = new Toast(page);
});

/* positive tests */
test("Should login as admin", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm("admin@zombieplus.com", "pwd123");
  await loginPage.checkLoggedIn();
});

/* negative tests */
test("Shouldn't login with wrong pass", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm("admin@zombieplus.com", "wrongPassword");
  await toast.checkHasText(/Ocorreu um erro/);
});

test("Shouldn't login with empty mail", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm("", "wrongPassword");
  await loginPage.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty password", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm("marcosfromrio@protonmail.com", "");
  await loginPage.checkAlertHasText(/Campo obrigatório/);
});

test("Shouldn't login with empty data", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm("", "");
  await loginPage.checkAlertHasText([/Campo obrigatório/, /Campo obrigatório/]);
});

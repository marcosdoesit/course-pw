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

const { expect, test } = require("@playwright/test");
const LoginAdminPage = require("../pages/LoginAdminPage");

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginAdminPage(page);
});

test("Should login as admin", async ({ page }) => {
  await loginPage.open();
  await loginPage.submitLoginForm("admin@zombieplus.com", "pwd123");
  await loginPage.checkLoggedIn();
});

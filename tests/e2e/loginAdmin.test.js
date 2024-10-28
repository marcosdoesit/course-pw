const { expect, test } = require("@playwright/test");
const LoginAdminPage = require("../pages/LoginAdminPage");

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginAdminPage(page);
});

test("Should login as admin", async ({ page }) => {
  await loginPage.open();
});

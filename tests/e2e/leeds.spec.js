// @ts-check
const { test } = require("@playwright/test");
const LandingPage = require("../pages/Landing");
const { Toast } = require("../pages/Components");

let landingPage, toast;

test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  toast = new Toast(page);
});

/* positive tests */
test("Should register a lead in a waiting list", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm(
    "marcosfromrio",
    "marcosfromrio@protonmail.com"
  );

  await toast.checkHasText(/Agradecemos/);
});

/* negative tests */
// empty data tests
test("Shouldn't register with empty name", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "marcosfromrio@protonmail.com");

  await landingPage.checkHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty mail", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("marcosfromrio", "");

  await landingPage.checkHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty data", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "");

  await landingPage.checkHasAlertText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

// wrong data tests
test("Shouldn't register with wrong mail waiting list", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("marcosfromrio", "marcosfromrio.wrong");

  await landingPage.checkHasAlertText(/Email incorreto/);
});

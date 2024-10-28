// @ts-check
const { test } = require("@playwright/test");
const LandingPage = require("../pages/LandingPage");

let landingPage;

test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
});

/* positive tests */
test("Should register a lead in a waiting list", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm(
    "marcosfromrio",
    "marcosfromrio@protonmail.com"
  );

  await landingPage.expectHasToastText(/Agradecemos/);
});

/* negative tests */
// empty data tests
test("Shouldn't register with empty name", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "marcosfromrio@protonmail.com");

  await landingPage.expectHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty mail", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("marcosfromrio", "");

  await landingPage.expectHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty data", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "");

  await landingPage.expectHasAlertText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

// wrong data tests
test("Shouldn't register with wrong mail waiting list", async ({ page }) => {
  await landingPage.open();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("marcosfromrio", "marcosfromrio.wrong");

  await landingPage.expectHasAlertText(/Email incorreto/);
});

import { test } from '@support/index';
import { faker } from '@faker-js/faker';

test.describe('Lead registration', () => {
  test.describe.configure({ mode: 'serial' });

  const leadName = faker.person.fullName();
  const leadEmail = faker.internet.email();

  /* positive tests */
  test('Should register a lead in a waiting list', async ({
    page,
  }) => {
    await page.landing.open();
    await page.landing.openLeadModal();

    await page.landing.submitLeadForm(leadName, leadEmail);

    await page.toast.checkContainText(/Agradecemos/);
  });

  /* negative tests */
  test("Shouldn't register a lead with existing mail", async ({
    page,
  }) => {
    await page.landing.open();
    await page.landing.openLeadModal();

    await page.landing.submitLeadForm(leadName, leadEmail);

    await page.toast.checkContainText(/já está registrado/);
  });
});

/* negative tests */
// empty data tests
test("Shouldn't register with empty name", async ({ page }) => {
  await page.landing.open();
  await page.landing.openLeadModal();
  await page.landing.submitLeadForm(
    '',
    'marcosfromrio@protonmail.com'
  );

  await page.landing.checkHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty mail", async ({ page }) => {
  await page.landing.open();
  await page.landing.openLeadModal();
  await page.landing.submitLeadForm('marcosfromrio', '');

  await page.landing.checkHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty data", async ({ page }) => {
  await page.landing.open();
  await page.landing.openLeadModal();
  await page.landing.submitLeadForm('', '');

  await page.landing.checkHasAlertText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

// wrong data tests
test("Shouldn't register with wrong mail waiting list", async ({
  page,
}) => {
  await page.landing.open();
  await page.landing.openLeadModal();
  await page.landing.submitLeadForm(
    'marcosfromrio',
    'marcosfromrio.wrong'
  );

  await page.landing.checkHasAlertText(/Email incorreto/);
});

import { test } from '@contexts/appContexts';
import { faker } from '@faker-js/faker';

test.describe('Lead registration', () => {
  test.describe.configure({ mode: 'serial' });

  const leadName = faker.person.fullName();
  const leadEmail = faker.internet.email();

  /* positive tests */
  test('Should register a lead in a waiting list', async ({
    landing,
    toast,
  }) => {
    await landing.open();
    await landing.openLeadModal();

    await landing.submitLeadForm(leadName, leadEmail);

    await toast.checkContainText(/Agradecemos/);
  });

  /* negative tests */
  test("Shouldn't register a lead with existing mail", async ({
    landing,
    toast,
  }) => {
    await landing.open();
    await landing.openLeadModal();

    await landing.submitLeadForm(leadName, leadEmail);

    await toast.checkContainText(/já está registrado/);
  });
});

/* negative tests */
// empty data tests
test("Shouldn't register with empty name", async ({ landing }) => {
  await landing.open();
  await landing.openLeadModal();
  await landing.submitLeadForm('', 'marcosfromrio@protonmail.com');

  await landing.checkHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty mail", async ({ landing }) => {
  await landing.open();
  await landing.openLeadModal();
  await landing.submitLeadForm('marcosfromrio', '');

  await landing.checkHasAlertText(/Campo obrigatório/);
});

test("Shouldn't register with empty data", async ({ landing }) => {
  await landing.open();
  await landing.openLeadModal();
  await landing.submitLeadForm('', '');

  await landing.checkHasAlertText([
    /Campo obrigatório/,
    /Campo obrigatório/,
  ]);
});

// wrong data tests
test("Shouldn't register with wrong mail waiting list", async ({
  landing,
}) => {
  await landing.open();
  await landing.openLeadModal();
  await landing.submitLeadForm(
    'marcosfromrio',
    'marcosfromrio.wrong'
  );

  await landing.checkHasAlertText(/Email incorreto/);
});

import { LandingPage } from '@pages/landing/Leeds';
import { BrowserContext, Page } from '@playwright/test';

export type LandingFixtures = {
  context: BrowserContext;
  page: Page;
  landing: LandingPage;
};

const landingFixtures = {
  landing: async ({ page }, use) => {
    const landing = new LandingPage(page);
    await use(landing);
  },
};

export { landingFixtures };


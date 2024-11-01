import { LandingPage } from '@pages/landing/Leeds';
import { Page } from '@playwright/test';

type LandingFixtures = {
  landing: (
    { page }: { page: Page },
    use: (landing: LandingPage) => Promise<void>
  ) => Promise<void>;
};

const landingFixtures: LandingFixtures = {
  landing: async (
    { page },
    use: (landing: LandingPage) => Promise<void>
  ) => {
    const landing = new LandingPage(page);
    await use(landing);
  },
};

export { landingFixtures };

import Analytics from 'analytics';

const analytics = Analytics({
  app: 'catalog-ui',
  plugins: [],
});

const logPageView = async (): Promise<void> => {
  await analytics.page();
};

const logClick = async (eventName: string, extraData?: any): Promise<void> => {
  await analytics.track(`${eventName}-click`, extraData);
};

export const AnalyticsClient = {
  logPageView,
  logClick,
};

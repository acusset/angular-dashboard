import { AngularDashboardPage } from './app.po';

describe('angular-dashboard App', () => {
  let page: AngularDashboardPage;

  beforeEach(() => {
    page = new AngularDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

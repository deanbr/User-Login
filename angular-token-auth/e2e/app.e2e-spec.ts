import { AngularTokenAuthPage } from './app.po';

describe('angular-token-auth App', () => {
  let page: AngularTokenAuthPage;

  beforeEach(() => {
    page = new AngularTokenAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

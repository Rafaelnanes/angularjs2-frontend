import { Angularjs2FrontendPage } from './app.po';

describe('angularjs2-frontend App', function() {
  let page: Angularjs2FrontendPage;

  beforeEach(() => {
    page = new Angularjs2FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pro works!');
  });
});

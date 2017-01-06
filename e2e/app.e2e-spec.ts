import { GislikonradPage } from './app.po';

describe('gislikonrad App', function() {
  let page: GislikonradPage;

  beforeEach(() => {
    page = new GislikonradPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

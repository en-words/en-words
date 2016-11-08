import { EnWordsPage } from './app.po';

describe('en-words App', function() {
  let page: EnWordsPage;

  beforeEach(() => {
    page = new EnWordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

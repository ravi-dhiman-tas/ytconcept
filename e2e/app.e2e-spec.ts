import { YtPage } from './app.po';

describe('yt App', function() {
  let page: YtPage;

  beforeEach(() => {
    page = new YtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

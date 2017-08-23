import { ApponePage } from './app.po';

describe('appone App', function() {
  let page: ApponePage;

  beforeEach(() => {
    page = new ApponePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

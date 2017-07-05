import { ToxTomFePage } from './app.po';

describe('tox-tom-fe App', () => {
  let page: ToxTomFePage;

  beforeEach(() => {
    page = new ToxTomFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

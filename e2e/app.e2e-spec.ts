import { WebWorkersFactorialPage } from './app.po';

describe('web-workers-factorial App', () => {
  let page: WebWorkersFactorialPage;

  beforeEach(() => {
    page = new WebWorkersFactorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

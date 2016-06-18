import { A2ForceAwakensPage } from './app.po';

describe('a2-force-awakens App', function() {
  let page: A2ForceAwakensPage;

  beforeEach(() => {
    page = new A2ForceAwakensPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('a2-force-awakens works!');
  });
});

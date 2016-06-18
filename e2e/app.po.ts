export class A2ForceAwakensPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a2-force-awakens-app h1')).getText();
  }
}

import { browser, element, by } from 'protractor';

export class Angularjs2FrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pro-root h1')).getText();
  }
}

import { TablePracticePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('table-practice App', () => {
  let page: TablePracticePage;

  beforeEach(() => {
    page = new TablePracticePage();
    browser.sleep(1000);
  });

  it('should have a checkbox', () => {
    page.navigateTo();

    const checkboxEl = element(by.id('test-checkbox'));
    const inputEl = element(by.css('input[id=input-test-checkbox]'));

    checkboxEl.click();

    inputEl.getAttribute('checked').then((value: string) => {
      expect(value).toBeTruthy('Checking to see if the checkbox is checked');
    });

    checkboxEl.click();

    inputEl.getAttribute('checked').then((value: string) => {
      expect(value).toBeFalsy('Checking to see if the checkbox is checked');
    });
  });
});

import { TablePracticePage } from './app.po';

describe('table-practice App', () => {
  let page: TablePracticePage;

  beforeEach(() => {
    page = new TablePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

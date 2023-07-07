const ejs = require('ejs');

const expectedExpenses = require('../../helpers/loadExpenses.js');

describe('Expenses Index View', () => {

  it('should render the index template', async () => {
    const expectedTitle = 'Expenses Index';

    const doc = document.createElement('html');
    doc.innerHTML = await ejs.renderFile(
      './views/expenses/index.ejs',
      {
        title: expectedTitle,
        expenses: expectedExpenses
      }
    );

    const title = doc.querySelector('title').innerHTML;
    expect(title).toBe(expectedTitle);

    const trs = doc.querySelectorAll('main table tbody tr');
    expectedExpenses.forEach( (expense, i) => {
      const expectedFormMethod       = /POST/i;
      const expectedFormAction       = `/expenses/${expense.id}?_method=DELETE`;
      const expectedSubmitButtonType = 'submit';
      const expectedDetailsHref      = `/expenses/${expense.id}`;
      const expectedData = [
        expense.date,
        expense.description,
        '$' + expense.amount
      ].sort();

      const tds              = trs[i].querySelectorAll('td');
      const tdsArray         = [...tds];
      const lastTd           = tdsArray.pop();
      const detailsHref      = lastTd.querySelector('a').getAttribute('href');
      const form             = lastTd.querySelector('form');
      const formAction       = form.getAttribute('action');
      const formMethod       = form.getAttribute('method');
      const submitButtonType = form.querySelector('button').getAttribute('type');
      const data             = tdsArray.map(e => e.innerHTML).sort();

      expect(formMethod).toMatch(expectedFormMethod);
      expect(formAction).toBe(expectedFormAction);
      expect(submitButtonType).toBe(expectedSubmitButtonType);
      expect(detailsHref).toBe(expectedDetailsHref);
      expect(data).toEqual(expectedData);
    })
  });

});

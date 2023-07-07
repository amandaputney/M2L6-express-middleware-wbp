const ejs = require('ejs');

const expectedExpenses = require('../../helpers/loadExpenses.js');

describe('Expenses Show View', () => {

  it('should render the show template', () => {
    const expectedTitle = 'Expense Details';

    expectedExpenses.forEach( async expectedExpense => {
      const expectedData = [
        expectedExpense.date,
        expectedExpense.description,
        '$' + expectedExpense.amount
      ].sort();

      const doc = document.createElement('html');
      doc.innerHTML = await ejs.renderFile(
        './views/expenses/show.ejs',
        {
          title: expectedTitle,
          expense: expectedExpense
        }
      );

      const title = doc.querySelector('title').innerHTML;
      const tds   = doc.querySelectorAll('td');
      const data  = [...tds].map(e => e.innerHTML).sort();

      expect(title).toBe(expectedTitle);
      expect(data).toEqual(expectedData);
    });
  });

});

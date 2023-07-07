const ejs = require('ejs');

describe('Expenses New View', () => {

  it('should render the new template', async () => {
    const expectedTitle            = 'New Expense';
    const expectedFormMethod       = /POST/i;
    const expectedFormAction       = '/expenses';
    const expectedInputNames       = ['date', 'description', 'amount'].sort();
    const expectedSubmitButtonType = 'submit';

    const doc = document.createElement('html');
    doc.innerHTML = await ejs.renderFile(
      './views/expenses/new.ejs',
      { title: expectedTitle }
    );

    const title            = doc.querySelector('title').innerHTML;
    const form             = doc.querySelector('form');
    const formAction       = form.getAttribute('action');
    const formMethod       = form.getAttribute('method');
    const inputs           = doc.querySelectorAll('input');
    const inputNames       = [...inputs].map(e => e.name).sort();
    const submitButtonType = form.querySelector('button').getAttribute('type');
    
    expect(title).toBe(expectedTitle);
    expect(formMethod).toMatch(expectedFormMethod);
    expect(formAction).toBe(expectedFormAction);
    expect(inputNames).toEqual(expectedInputNames);
    expect(inputNames.length).toBe(expectedInputNames.length);
    expect(submitButtonType).toBe(expectedSubmitButtonType);
  });

});

const expectedExpenses = require('../helpers/loadExpenses.js');

const Expense = require('../../models/expense');

describe('Expense Model', () => {

  it('should retrieve all expenses', () =>
    expect(Expense.getAll()).toEqual(expectedExpenses)
  );

  it('should retrieve one expense', () => {
    expectedExpenses.forEach(expectedExpense =>
      expect(Expense.getOne(expectedExpense.id)).toEqual(expectedExpense)
    )
  });

  it('should create an expense', () => {
    const expectedExpense = {
      date: '2023-01-01',
      description: 'Office party supplies',
      amount: '420.00'
    }

    Expense.create(expectedExpense);

    const allExpenses = Expense.getAll();
    const actualExpense = allExpenses[allExpenses.length - 1];

    expect(allExpenses.length).toBe(expectedExpenses.length + 1);
    expect(actualExpense).toEqual(expectedExpense);
  });

  it('should delete an expense', () => {
    const previousExpenses = Expense.getAll();
    const previousExpensesLength = previousExpenses.length;

    const expenseToDelete = previousExpenses[Math.floor(Math.random() * previousExpensesLength)];

    Expense.deleteOne(expenseToDelete.id);

    const allExpenses = Expense.getAll();
    const allExpensesFilteredForDeletedExpense = allExpenses.filter(e => 
      JSON.stringify(e) === JSON.stringify(expenseToDelete)
    );

    expect(allExpenses.length).toBe(previousExpensesLength - 1);
    expect(allExpensesFilteredForDeletedExpense).toEqual([]);
  });

});

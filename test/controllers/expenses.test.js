const expectedExpenses = require('../helpers/loadExpenses.js');

const expensesCtrl = require('../../controllers/expenses');

describe('Expenses Controller', () => {

  let mockReq, mockRes;

  beforeAll( () => {
    mockRes = {
      render: jest.fn(),
      redirect: jest.fn()
    };
  })

  it('should render all expenses', () => {
    mockReq = {};

    expensesCtrl.index(mockReq, mockRes);

    expect(mockRes.render).toHaveBeenCalledWith(
      'expenses/index', {
        title: 'Expense Report',
        expenses: expectedExpenses
      }
    );
  });

  it('should render one expense', () => {
    expectedExpenses.forEach( expectedExpense => {
      mockReq = {
        params: { id: expectedExpense.id }
      };

      expensesCtrl.show(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith(
        'expenses/show', {
          title: 'Expense Details',
          expense: expectedExpense
        }
      );
    });
  });

  it('should render new expense form', () => {
    mockReq = {};

    expensesCtrl.new(mockReq, mockRes);

    expect(mockRes.render).toHaveBeenCalledWith(
      'expenses/new', { title: 'New Expense' }
    );
  });

  it('should create an expense', () => {
    mockReq = {
      body: {
        date: '2023-01-01',
        description: 'Office party supplies',
        amount: '420.00'
      }
    };

    expensesCtrl.create(mockReq, mockRes);

    expect(mockRes.redirect).toHaveBeenCalledWith('/expenses');
  });

  it('should delete an expense', () => {
    expectedExpenses.forEach( expectedExpense => {
      mockReq = {
        params: { id: expectedExpense.id }
      };

      expensesCtrl.delete(mockReq, mockRes);

      expect(mockRes.redirect).toHaveBeenCalledWith('/expenses');
    });
  });
});

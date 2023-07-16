module.exports = {
  index,
  show,
  new: newExpense
};

const Expense = require('../models/expense');

function index(req, res) {
  const expenses = Expense.getAll();
  res.render('expenses/index', {
    title: 'Expense Report',
    expenses
  });
  ;
}

function newExpense(req, res) {
  res.render('expenses/new', { title: 'New Expense' })
};

function show(req, res) {
  const expense = Expense.getOne(req.params.id);
  res.render('expenses/show', {
    title: 'Expense Details',
    expense
  });
}
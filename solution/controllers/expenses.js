module.exports = {
  index,
  show,
  new: newExpense,
  create,
  delete: deleteExpense
};

const Expense = require('../models/expense');

function index(req, res) {
  const expenses = Expense.getAll();

  res.render('expenses/index', {
    title: 'Expense Report',
    expenses
  });
}

function show(req, res) {
  const expense = Expense.getOne(req.params.id);

  res.render('expenses/show', {
    title: 'Expense Details',
    expense
  });
}

function newExpense(req, res) {
  res.render('expenses/new', {
    title: 'New Expense'
  });
}

function create(req, res) {
  Expense.create(req.body);
  res.redirect('/expenses');
}

function deleteExpense(req, res) {
  Expense.deleteOne(req.params.id);
  res.redirect('/expenses');
}

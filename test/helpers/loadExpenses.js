const rewire = require('rewire');

// Using rewire in order to gain access to the "private" expenses constant
const Expense = rewire('../../models/expense');
const expenses = Expense.__get__('expenses');

module.exports = expenses;

const express = require('express');
const router = express.Router();
const expensesCtrl = require('../controllers/expenses');
const { route } = require('.');

router.get('/', expensesCtrl.index);

router.get('/new', expensesCtrl.new);

router.get('/:id', expensesCtrl.show);

module.exports = router;
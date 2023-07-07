const express = require('express');
const router = express.Router();

const expensesCtrl = require('../controllers/expenses');

router.get('/', expensesCtrl.index);

router.get('/:id', expensesCtrl.show);

module.exports = router;
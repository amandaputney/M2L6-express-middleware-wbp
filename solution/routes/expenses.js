const express = require('express');
const router = express.Router();

const expensesCtrl = require('../controllers/expenses');

router.get('/', expensesCtrl.index);
router.get('/new', expensesCtrl.new);
router.get('/:id', expensesCtrl.show);
router.post('/', expensesCtrl.create);
router.delete('/:id', expensesCtrl.delete);

module.exports = router;

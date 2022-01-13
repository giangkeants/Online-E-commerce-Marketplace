const express = require('express');
const router = express.Router();
const controller = require('./checkoutController');

// POST Method
router.post('/', controller.insert);

// PUT Method
router.put('/:id', controller.update);

// DELETE Method
router.delete('/:id', controller.delete);

module.exports = router;
const express = require('express');
const router = express.Router();

const cartController = require('./cartController');

// GET Methods //
router.get('/', cartController.getCart);

// Delete Methods //
router.post('/:id', cartController.deleteProduct);
router.post('/', cartController.deleteAllProduct);




module.exports = router;
const express = require('express');
const router = express.Router();

const cartController = require('./cartApiController');

// Post Methods //
router.post('/:id', cartController.insertProductToCart);

module.exports = router;
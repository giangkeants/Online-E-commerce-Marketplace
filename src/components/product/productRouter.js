const express = require('express');
const router = express.Router();
const controller = require('./productController');

// GET Method
// Paging
router.get('/', controller.paging);
// Get 1 product
router.get('/:id', controller.getProductById);

module.exports = router;
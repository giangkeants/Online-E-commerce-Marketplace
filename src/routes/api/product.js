const express = require('express');
const router = express.Router();
const controller = require('../../controllers/product');

// GET Method
// Get 1 product
router.get('/:id', controller.get);
router.get('/', controller.getAll);

// POST Method
router.post('/', controller.insert);
module.exports = router;
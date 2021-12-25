const express = require('express');
const router = express.Router();
const controller = require('./productController');

// GET Method
// Paging
router.get('/', controller.paging);
// Get 1 product
router.get('/:id', controller.get);

// POST Method
router.post('/',  controller.insert);

// PUT Method
router.put('/:id', controller.update);

// DELETE Method
router.delete('/:id', controller.delete);

module.exports = router;
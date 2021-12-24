const express = require('express');
const router = express.Router();
const controller = require('./uploadController');
const upload = require('../../config/multer');

// GET Method
// Paging
//router.get('/', controller.paging);
//router.get('/gallery', controller.getImage);
//router.get('/', controller.getAll);

// Render add new product page
router.get('/add-new-product', controller.renderAddProductPage);
// Get 1 product
router.get('/:id', controller.get);

// POST Method
router.post('/', upload.single('product-images'), controller.insert);

// PUT Method
router.put('/:id', controller.update);
// router.put('/update', controller.update);

// DELETE Method
router.delete('/:id', controller.delete);

module.exports = router;
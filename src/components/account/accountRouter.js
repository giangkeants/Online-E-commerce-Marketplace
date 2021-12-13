const express = require('express');
const router = express.Router();
const controller = require('./accountController');
const upload = require('../../config/multer');

// GET Method
// router.get('/page', controller.paging);
router.get('/:id', controller.get);
// router.get('/', controller.getAll);

// POST Method
router.post('/', controller.insert);

// PUT Method
router.put('/:id', upload.single('avatar'), controller.update);

// DELETE Method
router.delete('/:id', controller.delete);

module.exports = router;
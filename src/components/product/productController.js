const productService = require('./productService');
const offerService = require('../offer/offerService');
const discountService = require('../discount/discountService');

/**
 * Lay 1 san pham len bang id
 *
 * @param req request
 * @param res respone
 * @returns {Promise<void>}
 */
exports.get = async (req, res) => {
  try {
    const product = await productService.get(req.params.id);
    // res.json(product);
    res.render('product/views/detail', { product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.paging = async (req, res) => {
  try {
    const products = await productService.paging(req.query.page);
    // res.json(products);
    res.render('product/views/products', { products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/**
 * Lay list cac san pham
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.getAll = async (req, res) => {
  try {
    const products = await productService.getAll();
    // res.json(products);
    res.render('product/views/products', { products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Them san pham moi vao database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.insert = async (req, res) => {
  try {
    const newProduct = await productService.insert(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update san pham da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedProduct = await productService.update(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa san pham trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await productService.delete(req.params.id);
    res.json({message: `Product ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
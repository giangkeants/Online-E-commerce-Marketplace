const service = require('./uploadService');
/*const offerService = require("../offer/offerService");
const discountService = require("../discount/discountService");*/

/**
 * Lay 1 san pham len bang id
 *
 * @param req request
 * @param res respone
 * @returns {Promise<void>}
 */
exports.get = async (req, res) => {
  try {
    const product = await service.get(req.params.id);
    //const offers = await offerService.getAll();
    //const discounts = await discountService.getAll();
    // res.json(product);
    res.render('upload/views/edit-product', {product});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/*exports.paging = async (req, res) => {
  try {
    const products = await service.paging(req.query.page); 
    // res.json(products);
    res.render('upload', { products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}*/

/**
 * Lay tat ca offer va discount tu database
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.renderAddProductPage = async (req, res) => {
  try {
    //const offers = await offerService.getAll();
    //const discounts = await discountService.getAll();
    // res.json({ offers, discounts });
    res.render('upload/views/add-new-product');                //, { offers,  discounts}
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
    const products = await service.getAll();
    // res.json(products);
    // res.render('products', { products });
    res.render('products', { products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Lay list anh cac san pham
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
/*exports.getImage = async (req, res) => {
  try {
    const products = await service.getAll();
    res.render('gallery', { products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};*/

/**
 * Them san pham moi vao database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.insert = async (req, res) => {
  try {
    await service.insert(req.body);
    // const products = await service.paging(req.query.page);
    // res.status(201).json(newProduct);
    // res.render('products', { products });
    res.redirect('/add-new-product');
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
    const updatedProduct = await service.update(req.params.id, req.body);
    // res.json(updatedProduct);
    // res.render('edit_products', { updatedProduct });
    res.redirect('/products');
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
    await service.delete(req.params.id);
    // const products = await service.paging(req.query.page);
    // res.render('products', { products });
    res.redirect('/products');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

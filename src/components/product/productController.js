const productService = require('./productService');
const commentService = require("../comment/commentService");
// const offerService = require('../offer/offerService');
// const discountService = require('../discount/discountService');

/**
 * Lay 1 san pham len bang id
 *
 * @param req request
 * @param res respone
 * @returns {Promise<void>}
 */

/**
 * Lay 1 san pham len bang id
 *
 * @param req request
 * @param res respone
 * @returns {Promise<void>}
 */
exports.getProductById = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // trang thu n
    const product = await productService.get(req.params.id);
    const comments = await commentService.getComment(page, req.params.id);

    const results = {};
    results.curr = page;
    const startIdx = (page - 1) * 5;
    if (comments.length >= 5) {
      results.next = page + 1;
    } else {
      results.curr = page;
      results.next = results.curr + 1;
      results.prev = results.curr - 1;
    }

    if (startIdx > 0) {
      results.prev = page - 1;
    } else {
      results.prev = 1;
      results.curr = 2;
      results.next = 3;
    }
    results.comments = comments;

    // res.json(product);
    res.render("product/views/detail", { product, results });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.paging = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1; // trang thu n
    const products = await productService.paging(page);

    const results = {};
    results.curr = page;

    results.first = (page - 1) * 12 + 1;
    results.last = (page - 1) * 12 + products.length;
    results.length = (await productService.getAll()).length;

    // Paginated
    const startIdx = (page - 1) * 12;
    if (products.length >= 12) {
      results.next = page + 1;
    }
    else {
      results.curr = page;
      results.next = results.curr + 1;
      results.prev = results.curr - 1;
    }

    if (startIdx > 0) {
      results.prev = page - 1;
    }
    else {
      results.prev = 1;
      results.curr = 2;
      results.next = 3;
    }
    results.products = products;


    res.render('product/views/products', { results });
    // res.status(200).json(results);
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

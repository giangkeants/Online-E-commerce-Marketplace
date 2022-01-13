const service = require("../../components/product/productService");

exports.getByName = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1; // trang thu n
    const products = await service.getByName(req.query.name, page);

    const results = {};
    results.curr = page;
    // Paginated
    const startIdx = (page - 1) * 9;
    if (products.length >= 9) {
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
    results.products = products;

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.filterProducts = async function (req, res) {
  try {
    const products = await service.filterProducts(
      req.query.category,
      req.query.producer
    );
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.sortingProducts = async function (req, res) {
  try {
    const page = parseInt(req.query.page) || 1; // trang thu n
    const products = await service.sortingProducts(page, req.query["sort-by"]);

    const results = {};
    results.curr = page;
    // Paginated
    const startIdx = (page - 1) * 9;
    if (products.length >= 9) {
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
    results.products = products;

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

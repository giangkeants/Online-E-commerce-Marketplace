const model = require('../models/product');

exports.get = async (req, res) => {
  try {
    const product = await model.findById(req.params.id);
    if (product === null) {
      return res.status(404).json({mess: `Product id '${req.params.id}' not found`});
    }

    res.json(product);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const product = await model.find();
    res.json(product);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {
  const product = new model(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ mess: err.message });
  }
}
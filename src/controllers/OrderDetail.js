const model = require('../models/OrderDetail');

exports.get = async (req, res) => {
  try {
    const orderDetail = await model.findById(req.params.id);
    if (orderDetail === null) {
      return res.status(404).json({mess: `Product id '${req.params.id}' not found`});
    }

    res.json(orderDetail);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const orderDetail = await model.find();
    res.json(orderDetail);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {
  const orderDetail = new model(req.body);
  try {
    const newOrder = await orderDetail.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ mess: err.message });
  }
}
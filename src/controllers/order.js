const model = require('../models/order');

exports.get = async (req, res) => {
  try {
    const order = await model.findById(req.params.id);
    if (order === null) {
      return res.status(404).json({mess: `Order id '${req.params.id}' not found`});
    }

    res.json(order);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const order = await model.find();
    res.json(order);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {
  const order = new model(req.body);
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ mess: err.message });
  }
}
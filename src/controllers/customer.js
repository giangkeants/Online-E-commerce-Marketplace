const model = require('../models/customer');

exports.get = async (req, res) => {
  try {
    const customer = await model.findById(req.params.id);
    if (customer === null) {
      return res.status(404).json({mess: `Customer id '${req.params.id}' not found`});
    }

    res.json(customer);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const customer = await model.find();
    res.json(customer);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {
  const customer = new model(req.body);
  try {
    const newOrder = await customer.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ mess: err.message });
  }
}
const model = require('../models/account');

exports.get = async (req, res) => {
  try {
    const account = await model.findById(req.params.id);
    if (account === null) {
      return res.status(404).json({mess: `Account id '${req.params.id}' not found`});
    }

    res.json(account);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const account = await model.find();
    res.json(account);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {
  const account = new model(req.body);
  try {
    const newOrder = await account.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ mess: err.message });
  }
}
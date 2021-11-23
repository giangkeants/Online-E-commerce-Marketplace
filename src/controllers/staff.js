const model = require('../models/staff');

exports.get = async (req, res) => {
  try {
    const staff = await model.findById(req.params.id);
    if (staff === null) {
      return res.status(404).json({mess: `Staff id '${req.params.id}' not found`});
    }

    res.json(staff);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const staff = await model.find();
    res.json(staff);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {
  const staff = new model(req.body);
  try {
    const newOrder = await staff.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ mess: err.message });
  }
}
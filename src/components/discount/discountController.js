const service = require('./discountService');

exports.get = async (req, res) => {
  try {
    const discount = await service.get(req.params.id);
    res.json(discount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const discounts = await service.getAll();
    res.json(discounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const discount = await service.insert(req.body);
    res.status(201).json(discount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update discount da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedDiscount = await service.update(req.params.id, req.body);
    res.json(updatedDiscount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa discount trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Discount ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
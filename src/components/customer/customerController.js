const service = require('./customerService');

exports.get = async (req, res) => {
  try {
    const customer = await service.get(req.params.id);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const customers = await service.getAll();
    res.json(customers);
  } catch (e) {
    res.status(500).json({ message: err.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const newCustomer = await service.insert(req.body);
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update khach hang da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedCustomer = await service.update(req.params.id, req.body);
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa khach hang trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({ message: `Customer ${req.params.id} has been deleted` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
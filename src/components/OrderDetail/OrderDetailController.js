const service = require('./OrderDetailService');

exports.get = async (req, res) => {
  try {
    const orderDetail = await service.get(req.params.id);
    res.json(orderDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const ordersDetail = await service.getAll();
    res.json(ordersDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const newOrderDetail = service.insert(req.body);
    res.json(newOrderDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va Update order detail da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedOrderDetail = await service.update(req.params.id, req.body);
    res.json(updatedOrderDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa order detail trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Order detail ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
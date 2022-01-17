const service = require('./staffService');

exports.get = async (req, res) => {
  try {
    const staff = await service.get(req.params.id);
    res.json(staff);
  } catch (e) {
  }
};

exports.getAll = async (req, res) => {
  const staffs = await service.getAll();
  res.json(staffs);
};

exports.insert = async (req, res) => {
  const newStaff = service.insert(req.body);
  res.json(newStaff);
}

/**
 * Tim va Update staff da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedStaff = await service.update(req.params.id, req.body);
    res.json(updatedStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa staff trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({ message: `Staff ${req.params.id} has been deleted` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
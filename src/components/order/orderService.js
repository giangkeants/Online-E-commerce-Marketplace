const model = require('./orderModel');
const mongoose = require('mongoose');

exports.get = async (id) => {
  try {
    const order = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (order === null) {
      return {mess: `Order id '${req.params.id}' not found`};
    }
    return order;
  } catch (err) {
    throw err;
  }
};

exports.getAll = async () => {
  try {
    return await model.find();
  } catch (err) {
    throw err;
  }
};

exports.insert = async (newOrder) => {
  const order = new model(newOrder);
  try {
    return await order.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Tim order bang id, update thong tin san pham ton tai trong database
 *
 * @param id
 * @param updateOrder
 * @returns {Promise<{order: model}>}
 */
exports.update = async (id, updateOrder) => {
  try {
    return await model.findByIdAndUpdate(id, updateOrder,
        { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Xoa san pham dang co trong database bang id
 *
 * @param id
 * @returns {Promise<{order: model}>}
 */
exports.delete = async (id) => {
  try {
    return await model.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}
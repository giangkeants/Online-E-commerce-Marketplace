const model = require('./OrderDetailModel');
const mongoose = require('mongoose');

exports.get = async (id) => {
  try {
    const orderDetail = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (orderDetail === null) {
      return { mess: `Product id '${id}' not found` };
    }
    return orderDetail;
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

exports.insert = async (newOrderDetail) => {
  const orderDetail = new model(newOrderDetail);
  try {
    return await orderDetail.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Tim order detail bang id, update thong tin san pham ton tai trong database
 *
 * @param id
 * @param updateOrderDetail
 * @returns {Promise<{OrderDetail: model}>}
 */
exports.update = async (id, updateOrderDetail) => {
  try {
    return await model.findByIdAndUpdate(id, updateOrderDetail,
      { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Xoa order detail dang co trong database bang id
 *
 * @param id
 * @returns {Promise<{OrderDetail: model}>}
 */
exports.delete = async (id) => {
  try {
    return await model.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}
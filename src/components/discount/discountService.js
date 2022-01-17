const model = require('./discountModel');
const mongoose = require('mongoose');

exports.get = async (id) => {
  try {
    const discount = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (discount === null) {
      return { mess: `Discount id '${id}' not found` };
    }
    return discount;
  } catch (err) {
    throw err
  }
};

exports.getAll = async () => {
  try {
    return await model.find();
  } catch (err) {
    throw err;
  }
};

exports.insert = async (newDiscount) => {
  const discount = new model(newDiscount);
  try {
    return await discount.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Cap nhat thong tin discount co trong database
 *
 * @param id
 * @param updateDiscount
 * @returns {Promise<{discount: model}>}
 */
exports.update = async (id, updateDiscount) => {
  try {
    return await model.findByIdAndUpdate(id, updateDiscount,
      { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Tim discount bang id xoa khoi database
 * @param id
 * @returns {Promise<*>}
 */
exports.delete = async (id) => {
  try {
    return await model.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}
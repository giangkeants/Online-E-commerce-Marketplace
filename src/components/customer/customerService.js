const model = require('./customerModel');
const mongoose = require('mongoose');

exports.get = async (id) => {
  try {
    const customer = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (customer === null) {
      return { mess: `Customer id '${id}' not found` };
    }
    return customer;
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

exports.insert = async (newCustomer) => {
  const customer = new model(newCustomer);
  try {
    return await customer.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Cap nhat thong tin khach hang co trong database
 *
 * @param id
 * @param updateCustomer
 * @returns {Promise<{customer: model}>}
 */
exports.update = async (id, updateCustomer) => {
  try {
    return await model.findByIdAndUpdate(id, updateCustomer,
      { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Tim khach hang bang id xoa khoi database
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
const model = require('./staffModel');
const mongoose = require("mongoose");

exports.get = async (id) => {
  try {
    const staff = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (staff === null) {
      return { mess: `Staff id '${id}' not found` };
    }
    return staff;
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

exports.insert = async (newStaff) => {
  const staff = new model(newStaff);
  try {
    return await staff.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Tim staff bang id, update thong tin san pham ton tai trong database
 *
 * @param id
 * @param updateStaff
 * @returns {Promise<{staff: model}>}
 */
exports.update = async (id, updateStaff) => {
  try {
    return await model.findByIdAndUpdate(id, updateStaff,
      { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Xoa staff dang co trong database bang id
 *
 * @param id
 * @returns {Promise<{staff: model}>}
 */
exports.delete = async (id) => {
  try {
    return await model.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}
const model = require('./offerModel');
const mongoose = require("mongoose");

exports.get = async (id) => {
  try {
    const offer = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (offer === null) {
      return {mess: `Offer id '${id}' not found`};
    }
    return offer;
  } catch (err) {
    throw err;
  }
};

exports.getAll = async () => {
  try {
    return await model.find();
  } catch (err) {
    throw err
  }
};

exports.insert = async (newOffer) => {
  const offer = new model(newOffer);
  try {
    return await offer.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Tim offer bang id, update thong tin san pham ton tai trong database
 *
 * @param id
 * @param updateProduct
 * @returns {Promise<{offer: model}>}
 */
exports.update = async (id, updateOffer) => {
  try {
    return await model.findByIdAndUpdate(id, updateOffer,
        { new: true });
  } catch (err) {
    throw err;
  }
}

/**
 * Xoa offer dang co trong database bang id
 *
 * @param id
 * @returns {Promise<{offer: model}>}
 */
exports.delete = async (id) => {
  try {
    return await model.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}
const model = require('./ReviewModel');
const mongoose = require('mongoose');

exports.get = async (id) => {
  try {
    const review = await model.findById(mongoose.Types.ObjectId.createFromHexString(id));
    if (review === null) {
      return {mess: `Review id '${id}' not found`};
    }
    return review;
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

exports.insert = async (newreview) => {
  const review = new model(newreview);
  try {
    return await review.save();
  } catch (err) {
    throw err;
  }
}

/**
 * Tim order detail bang id, update thong tin san pham ton tai trong database
 *
 * @param id
 * @param updateReview
 * @returns {Promise<{ReviewModel: model}>}
 */
exports.update = async (id, updateReview) => {
  try {
    return await model.findByIdAndUpdate(id, updateReview,
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
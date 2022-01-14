const checkoutModel = require("./checkoutModel");
const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

/**
 * get checkout by user_id
 * @param id
 * @returns {Promise<Query<Document<any, any, unknown> & Require_id<unknown>, Document<any, any, unknown> & Require_id<unknown>, {}, unknown>|{mess: string}>}
 */
exports.getByUserId = async (user_id) => {
  try {
    const checkout = await checkoutModel
      .findOne({
        "customer._id": ObjectId.createFromHexString(user_id),
      })
      .lean();

    return checkout;
  } catch (err) {
    throw err;
  }
};

/**
 * insert checkout
 * @param user_id
 * @returns {Promise<Document<any, any, unknown> & Require_id<unknown>>}
 */
exports.insert = async (user_id, cart, customer) => {
  try {
    const newCheckout = new checkoutModel({
      cart: cart,
      customer: customer,
      shipping_fee: null,
      subtotal_price: null,
      payment: null,
      discount: null,
      note: null,
    });
    await newCheckout.save();
    return newCheckout;
  } catch (err) {
    throw err;
  }
};

/**
 * Tim checkout bang user id, update cart trong database
 *
 * @param id
 * @param updateCheckout
 * @returns {Promise<{checkout: checkoutModel}>}
 */
exports.updateCart = async (cart, checkout) => {
  try {
    await checkoutModel.findOneAndUpdate(
      { _id: checkout._id },
      { $set: { cart: cart } }
    );
    return await checkoutModel.findOne({ _id: checkout._id });
  } catch (err) {
    throw err;
  }
};

/**
 * Tim checkout bang id, update thong tin vao trong database
 *
 * @param id
 * @param updateCheckout
 * @returns {Promise<{checkout: checkoutModel}>}
 */
exports.update = async (id, updateCheckout) => {
  try {
    return await checkoutModel.findByIdAndUpdate(id, updateCheckout, {
      new: true,
    });
  } catch (err) {
    throw err;
  }
};

/**
 * Xoa check out dang co trong database bang id
 *
 * @param id
 * @returns {Promise<{checkout: checkoutModel}>}
 */
exports.delete = async (id) => {
  try {
    return await checkoutModel.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

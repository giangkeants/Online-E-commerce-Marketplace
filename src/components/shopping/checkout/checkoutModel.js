const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
  // Schema attributes are defined here
  cart: Object,
  customer: Object,
  shipping_fee: Number,
  subtotal_price: Number,
  discount: String,
}, { timestamps: true, versionKey: false });

// Create order model in db
module.exports = mongoose.model('checkout', checkoutSchema, 'checkout');
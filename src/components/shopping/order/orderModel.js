const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema( {
  // Schema attributes are defined here
  product: Object,
  customer_id: Object,
  order_status: String,
  shipping_fee: Number,
  price: Number,
  quantity: Number,
  address: String,
  payment: String
}, { timestamps: true, versionKey: false });

// Create order model in db
module.exports = mongoose.model('order', orderSchema, 'order');
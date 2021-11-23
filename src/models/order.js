const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema( {
  // Schema attributes are defined here
  orderName: { alias: 'order_name', type: String },
  orderStatus: { alias: 'order_status', type: String },
  shippingFee: { alias: 'shipping_fee', type: Number },
  price: Number,
  address: String,
  customerId: { alias: 'customer_id', type: mongoose.Types.ObjectId },
  payment: String
}, { timestamps: true, versionKey: false });

// Create order model in db
module.exports = mongoose.model('order', orderSchema);
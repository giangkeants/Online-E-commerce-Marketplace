const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * OrderDetailSchema đại diện cho collection OrderDetailSchema trong db
 */
const OrderDetailSchema = new Schema( {
  // Schema attributes are defined here
  product_id: { type: mongoose.Types.ObjectId },
  quantity: Number,
  order_id: { type: mongoose.Types.ObjectId }
}, { timestamps: true, versionKey: false });

/**
 * Tạo model OrderDetailSchema và export thành module
 */
module.exports = mongoose.model('order_detail', OrderDetailSchema, 'order_detail');
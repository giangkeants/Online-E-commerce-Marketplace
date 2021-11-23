const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * OrderDetailSchema đại diện cho collection OrderDetailSchema trong db
 */
const OrderDetailSchema = new Schema( {
  // Schema attributes are defined here
  quantity: Number
}, { timestamps: true, versionKey: false });

/**
 * Tạo model OrderDetailSchema và export thành module
 */
module.exports = mongoose.model('order_detail', OrderDetailSchema);
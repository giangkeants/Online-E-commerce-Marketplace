const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema
 */
const productSchema = new Schema({
  // Schema attributes are defined here
  name: { type: String },
  image_url: String,
  author: String,
  price: Number,
  category: String,
  stock: Number,
  discount: Object,
  offer: Object
}, { timestamps: true, versionKey: false });


module.exports = mongoose.model('product', productSchema, 'product');
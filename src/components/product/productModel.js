const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema
 */
const productSchema = new Schema({
  // Schema attributes are defined here
  name: { type: String },
  category: String,
  author: String,
  price: Number,
  description: String,
  image_url: String
}, { timestamps: true, versionKey: false });


module.exports = mongoose.model('product', productSchema, 'product');
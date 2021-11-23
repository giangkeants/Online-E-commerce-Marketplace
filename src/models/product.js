const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema
 */
const productSchema = new Schema({
  // Schema attributes are defined here
  productName: { type: String, alias: 'product_name' },
  CPU: String,
  RAM: String,
  disk: String,
  graphicCard: String,
  screen: String,
  port: String,
  opticalDisk: String,
  audio: String,
  keyboard: String,
  readMemCard: String,
  LAN: String,
  WIFI: String,
  bluetooth: String,
  webcam: String,
  os: String,
  pin: String,
  weight: Number,
  color: String,
  size: String,
  review: mongoose.Types.ObjectId,
  origin: String,
  price: Number,
  producer: String,
  stock: Number,
}, { timestamps: true, versionKey: false });


module.exports = mongoose.model('product', productSchema);
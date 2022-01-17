const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  // Schema attributes are defined here
  name: { type: String },
  phone: { type: String },
  address: String,
  email: String
}, { timestamps: true, versionKey: false });

// Create customer model in db
module.exports = mongoose.model('customer', customerSchema, 'customer');
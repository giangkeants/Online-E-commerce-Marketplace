const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  // Model attributes are defined here
  name: { type: String },
  phone: { type: String },
  address: String,
  email: String,
}, { timestamps: true, versionKey: false });

// Create staff model in db
module.exports = mongoose.model('staff', staffSchema, 'staff');
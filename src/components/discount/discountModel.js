const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountSchema = new Schema( {
  // Schema attributes are defined here
  rate: Number,
  date_start: { type: Date },
  date_end: { type: Date }
}, { timestamps: true, versionKey: false });

// Create customer model in db
module.exports = mongoose.model('discount', discountSchema, 'discount');
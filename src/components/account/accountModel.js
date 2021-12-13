const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  // Schema attributes are defined here
  username: String,
  password: String,
  email: String,
  account_status: { type: Boolean, default: true },
  name: String,
  phone: String,
  address: String,
  sex: String,
  dob: String,
  avatar_url: String
}, { timestamps: true, versionKey: false });

// Create account model in db
module.exports = mongoose.model('account', accountSchema, 'account');
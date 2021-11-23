const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  // Schema attributes are defined here
  username: String,
  password: String,
  accountStatus: { alias: 'account_status', type: Boolean },
}, { timestamps: true, versionKey: false });

// Create account model in db
module.exports = mongoose.model('account', accountSchema);
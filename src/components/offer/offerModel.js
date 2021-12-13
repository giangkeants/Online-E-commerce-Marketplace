const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema( {
  // Schema attributes are defined here
  content: String
}, { timestamps: true, versionKey: false });

// Create customer model in db
module.exports = mongoose.model('offer', offerSchema, 'offer');
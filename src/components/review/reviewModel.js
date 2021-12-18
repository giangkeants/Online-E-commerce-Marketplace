const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema( {
  // Schema attributes are defined here
    product_id: { type: mongoose.Types.ObjectId },
    reviewer: Object,
    rate: Number,
    review: String
}, { timestamps: true, versionKey: false });

// Create review model in db
module.exports = mongoose.model('review', reviewSchema, 'review');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // Schema attributes are defined here
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_avatar_url: String,
    user_name: String,
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    content: String
}, { timestamps: { createdAt: true, updatedAt: false }, versionKey: false });

// Create account model in db
module.exports = mongoose.model('comment', commentSchema, 'comment');
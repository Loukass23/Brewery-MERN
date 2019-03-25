const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Comment = mongoose.model('comment', CommentSchema);

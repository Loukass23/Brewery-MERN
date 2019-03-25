const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  url: {
    type: String,
    required: true,
    max: 30
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  age: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);

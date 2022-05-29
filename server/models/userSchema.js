const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: Number,
    required: [true, "Password is required"],
    trim: true,
    minlength: 8,
  },
});

module.exports = mongoose.model('User', userSchema);    
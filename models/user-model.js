const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "User must have a name"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "User must have a phone-number"],
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    trim: true,
    lowerCase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A user must have an email"],
    minLength: [8, "A password must be at least 8 characters"],
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

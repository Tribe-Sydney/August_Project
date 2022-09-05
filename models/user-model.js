const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Student must have a name"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Student must have a phone-number"],
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
  },
});

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
      },
      userName: {
        type: String,
        required: [true, "username is required"],
        trim: true,
      },
      password: {
        type: String,
        required: [true, "password is required"],
        trim: true,
      },
    fullName: {
        type: String,
        required: [true, "fullname is required"],
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: [true, "phone number is required"],
      },
})

const User = mongoose.model('User', userSchema)
module.exports = User
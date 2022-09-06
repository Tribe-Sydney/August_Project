const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "blog must have a title"],
        trim: true,
    },
    blogBody: {
        type: String,
        required: [true, "blog must have a body"],
        maxLength:[5000,'blog body must not exceed less than 5000']
    },
    author: {
        type: String,
        required: [true, "blog must have a author"],
        trim: true,
    }
})
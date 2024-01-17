const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },

    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },

    imgSrc: {
        type: String,
        required: true,
    },

    demoLink: {
        type: String,
        required: true,
    },
} , { timestamps: true });


const Blog = mongoose.model("Blog" , blogSchema);


module.exports = Blog;

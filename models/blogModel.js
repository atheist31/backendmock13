const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogModel = new Schema({
    username: String,
    title: String,
    content: String,
    category: String,
    date: Date,
    likes: Number,
    comments: [{ username: String, content: String, date: Date }],
});

module.exports = blogModel = mongoose.model("blog", blogModel);
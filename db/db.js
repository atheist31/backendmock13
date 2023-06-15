const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/blog")
        .then(() => console.log("💻 Mondodb Connected"))
        .catch(err => console.error(err));
}

module.exports = connectDB;
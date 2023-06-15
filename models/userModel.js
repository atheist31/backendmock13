const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    avatar: String,
    email: String,
    password: String
});

module.exports = userModel = mongoose.model("user", userSchema);
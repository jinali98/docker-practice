const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "user must have a unique name"],
  },
  password: {
    type: String,
    required: [true, "user must have a password"],
  },
});

const User = mongoose.model("User", userModel);

module.exports = User;

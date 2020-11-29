const mongoose = require("mongoose");

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,   
  })
);

module.exports = User;
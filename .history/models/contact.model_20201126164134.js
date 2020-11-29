const mongoose = require("mongoose");

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    business_name: String,
    email: String,
    phone: String,   
  })
);

module.exports = Contact;
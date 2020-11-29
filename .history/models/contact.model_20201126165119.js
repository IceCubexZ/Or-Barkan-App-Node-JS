const mongoose = require("mongoose");

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    business_name: String,
    email: String,
    phone: String,
    image_name: [String],   
  })
);

module.exports = Contact;
const mongoose = require("mongoose");

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    description: String,
    image_name: [String],
    created: new Date()   
  })
);

module.exports = Contact;
const mongoose = require("mongoose");

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    stocks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stock"
    }]
  })
);

module.exports = Contact;
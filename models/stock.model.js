const mongoose = require("mongoose");

const Stock = mongoose.model(
    "Stock",
    new mongoose.Schema({
      details: String,
      image_name: [String],
      created: Date,   
    })
  );
  
  module.exports = Stock;
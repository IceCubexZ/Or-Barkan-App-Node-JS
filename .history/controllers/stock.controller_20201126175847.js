const db = require("../models");
const Stock = db.stock;
const path = require('path');

exports.create = (req, res) => {
    const stock = new Stock({
        name: req.body.name,
        details: req.body.details,
        image_name: req.body.files,
        created: req.body.created,  
    })
}
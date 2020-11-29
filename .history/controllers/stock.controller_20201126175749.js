const db = require("../models");
const Stock = db.stock;
const path = require('path');

exports.create = (req, res) => {
    const stock = new Stock({
        name: req.body.name,
        business_name: req.body.business_name,
        email: req.body.email,
        phone: req.body.phone,
    })
}
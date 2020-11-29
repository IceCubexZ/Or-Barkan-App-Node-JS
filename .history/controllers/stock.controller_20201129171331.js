const db = require("../models");
const Stock = db.stock;
const Contact = require('../models/contact.model');

exports.create = (req, res) => {
    let imgArray = [];
    req.files.forEach(img => {
        imgArray.push(img.originalname);
    })
    const stock = new Stock({
        details: req.body.details,
        image_name: imgArray,
        created: req.body.created,  
    })

    stock
     .save(stock)
     .then(data => {
         const id = req.params.id;
         console.log(data._id);
         Contact.findByIdAndUpdate(
            {_id: id},
            {$push: {stocks: data._id}},
         );
         res.json(data);
     })
     .catch(err => {
         res.status(500).send({
             message: "Some error occured while creating this stock",
         });
     });
}


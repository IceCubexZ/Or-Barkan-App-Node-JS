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
             id,
             {stocks: data._id},
             {new: true, useFindAndModify: false},
             (err, result) => {
                if(err) {
                    res.send(err)
                }
                else {
                    res.send(result);
                }
             }
         );
         res.json(data);
     })
     .catch(err => {
         res.status(500).send({
             message: "Some error occured while creating this stock",
         });
     });
}


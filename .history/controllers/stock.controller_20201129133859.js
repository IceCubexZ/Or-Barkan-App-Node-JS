const db = require("../models");
const Stock = db.stock;
const Contact = db.contact;

exports.create = (req, res) => {
    console.log(req.files);
    const stock = new Stock({
        details: req.body.details,
        image_name: req.files.originalname,
        created: req.body.created,  
    })

    stock
     .save(stock)
     .then(data => {
         const id = req.params.id;
         Contact.findByIdAndUpdate(
             id,
             {$push: {stocks: data._id}},
             {new: true, useFindAndModify: false}
         );
         res.json(data);
     })
     .catch(err => {
         res.status(500).send({
             message: "Some error occured while creating this stock",
         });
     });
}


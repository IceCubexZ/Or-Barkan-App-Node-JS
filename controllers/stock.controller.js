const db = require("../models");
const path = require('path');
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
            {$push: {"stocks": data._id}},
            {useFindAndModify: false, new: true}
         ).then(data => {
             console.log(data);
         })
         res.json(data);
     })
     .catch(err => {
         res.status(500).send({
             message: "Some error occured while creating this stock",
         });
     });
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Stock.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occured..."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Stock.find({_id:id})
    .then(data => {
        if(!data) {
            res.status(404).send({message: "Could'nt find Stock with this id :" + id});
        }
        else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500)
        .send({message: "Error"})
    })
}

exports.getImage = (req, res) => {
    const id = req.params.id;
    const imgName = req.body.imgName;

    Stock.findById({_id:id})
    .then(data => {
        if(!data) {
            res.status(404).send({message: "Couldn't find Stock with thid id : " + id});
        }
        else {
            res.status(200).sendFile(path.join(__dirname + "/../uploads/", "/" + imgName));
        }
    })
}
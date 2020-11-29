const db = require("../models");
const Contact = db.contact;
const path = require('path');

exports.create = (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        business_name: req.body.business_name,
        email: req.body.email,
        phone: req.body.phone,
    })
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Contact.find(condition)
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

    Contact.find({id: id})
      .then(data => {
          if(!data){
              res.status(404).send({message: "Couldn't find Contact with this id:" + id});
          }
          else{
            res.send(data);
          }
      })
      .catch(err => {
          res.status(500)
          .send({message: "Error "})
      })
}
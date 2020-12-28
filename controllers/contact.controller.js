const db = require("../models");
const Contact = db.contact;
const path = require('path');

exports.create = (req, res) => {
    const contact = new Contact({
        name: req.body.name,
    })
    contact
     .save(contact)
     .then(data => {
        res.json(data);
     })
     .catch(err => {
        res.status(500).send({
            message: "Some error occured while creating this contact... try again "
        });
     });
};

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

    Contact.find({_id: id})
      .populate("stocks")
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
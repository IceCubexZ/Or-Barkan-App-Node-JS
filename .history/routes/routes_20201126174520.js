const path = require("path");
var fs = require('fs');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage }); 

module.exports = app => {
    const contact = require("../controllers/contact.controller");
  
    const router = require("express").Router();
    
    
    router.post("/create", upload.single("file"), contact.create);
    router.post("/upload", upload.single("file"));

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    router.get("/tutbanner/:id", tutorials.tutBanner);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
  };
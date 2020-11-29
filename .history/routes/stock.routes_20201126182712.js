const { app } = require("firebase-functions");
const multer = require("multer");
const { stock } = require("../models");

const storgae = multer.diskStorage({
    destination: (req, files, cb) => {
        cb(null, 'uploads/');
    },

    filename: (file, cb) => {
        cb(null, file.originlname);
    }
});

const upload = multer({storage: storgae});

module.exports = () => {
    const stocks = require("../controllers/stock.controller");

    const router = require("express").Router();

    router.post("/add_stock", upload.array('file', 20), stocks.create);

    app.use('/api', router);
}
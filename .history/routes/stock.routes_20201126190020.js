const multer = require("multer");

const storgae = multer.diskStorage({
    destination: function(req, files, cb)  {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb)  {
        cb(null, file.originlname);
    }
});

const upload = multer({storage: storgae});

module.exports = app => {
    const stocks = require("../controllers/stock.controller");

    const router = require("express").Router();

    router.post("/add_stock", upload.array('file', 20), stocks.create);

    app.use('/api', router);
}
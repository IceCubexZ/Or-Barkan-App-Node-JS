const multer = require("multer");

const storgae = multer.diskStorage({
    destination: function(req, files, cb)  {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb)  {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storgae});

module.exports = app => {
    const stocks = require("../controllers/stock.controller");

    const router = require("express").Router();

    router.post("/add_stock/:id", upload.array('file', 20), stocks.create);

    router.get("/stocks", stocks.findAll);
    
    router.get("/stock/:id", stocks.findOne);

    router.get("/get_stock_image/:id", stocks.getImage);

    app.use('/api', router);
}

module.exports = app => {

    const contact = require("../controllers/contact.controller");

    const router = require("express").Router();

    router.post("/add_contact", contact.create);

    router.get("/contacts", contact.findAll);

    router.get("/contact/:id", contact.findOne);

    app.use('/api', router);

}
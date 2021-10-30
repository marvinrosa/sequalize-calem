
module.exports = app => {

    const workorders = require("../controllers/workorder.controller.js");
    const router = require("express").Router();
    //todas las ordenes de trabajo
    router.get('/', workorders.findAll);


    app.use('/workorders',router);
}
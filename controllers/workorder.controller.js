
// const Sequelize = require("../models/workorder.js").sequelize;
// const Op =  require("../models/workorder.js").Op;

// const Workroder = require("../models/workorder.js");
const models = require('./../models');

exports.findAll =(req, res) =>{
  console.log('otro1');

   models.workorders.findAll({
     atributes: ['id','wo_no']
   }).then(data => {res.json(data);
  console.log('data' , data);
  console.log('otro');})
    .catch(err => res.json({error : err}));
  
    // const title = req.query.title;
    // let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    // Workorder.findAll()
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Ocurrio un error al obtener los datos"
    //     });
    //   });
  }

  
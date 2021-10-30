'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const prueba = async () =>{
  try {
      await sequelize.authenticate();
      return console.log('Conexion establecida con MySQL');
  } catch (error) {
    return console.error('No fue posible conectarse a MySQL', error);
  }
}

console.log(prueba());
console.log(basename);


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.workorders = require('../models/workorder.js')(sequelize,Sequelize);

module.exports = db;




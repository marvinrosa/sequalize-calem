// const SequelizeAuto = require('sequelize-auto');
// const dbConfig = require("../config/db.config.js");


// const sequelize = new SequelizeAuto(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: 0,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });



// auto.run().then(data => {
//     console.log(data.tables);      // table and field list
//     console.log(data.foreignKeys); // table foreign key list
//     console.log(data.indexes);     // table indexes
//     console.log(data.hasTriggerTables); // tables that have triggers
//     console.log(data.relations);   // relationships between models
//     console.log(data.text)         // text of generated models
//   });
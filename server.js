const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 


require("./routes/index.routes")(app);

app.get("/",(req,res) => {
    res.json({message:'CALEM-EAM API'}); 
});


app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en',app.get('port'));
});

/*
    "username": "calem_user",
    "password": "Medic0001-",
    "database": "calemdby",
    "host": "198.198.198.99",
    "dialect": "mysql"
*/

// npx sequelize-cli db:migrate --url 'mysql://root:password@mysql_host.com/database_name'
// npx sequelize-auto -o "./models" -d calemdby -h 198.198.198.99 -u calem_user -x Medic0001- -p 3306  -e mysql

//sequelize-auto -o "./models" -d calemdby -h 198.198.198.99 -u calem_user -p 3306 -x Medic0001- -e mysql

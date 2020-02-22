const express = require ("express");
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//importing routes
const produtctRoutes = require('./routes/product');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 3306,
    database: 'traigosql'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', produtctRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Strating the server

app.listen(app.get('port'), () => {
    console.log("Server en port 3000");
});
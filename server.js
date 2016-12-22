/*
* Servidor para la API Rest codeando
* 
* Autor: Paulo Andrade
* Email: Source.compu@gmail.com
* Date: 20/12/2016
* Update: 21/12/2016
*/

// Exportamos las librerias a utilizar
var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	favicon = require('serve-favicon'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	PORT = 5000,
	session = require('express-session');

// Creamos el servidor
var app = express();

/****************************************************
Configuracion de la base de datos
****************************************************/

// Creamos la conexion de la base de datos
// mongodb://localhost/pymid (funcionaba con esto)
mongoose.Promise = require('bluebird'); // Libreria para trabajar con ES6
mongoose.connect('mongodb://localhost/codeando', function (err, res){
	// Verificamos si tiene algun error
	if(err) console.log('Error conectando a la DB: ' + err);
	else console.log('Conexion establecida a la DB :)');
});

/****************************************************
Configuracion del servidor
****************************************************/

// app.use(bodyParser()); Deprecated - hay que llamar a los funciones por separado
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(favicon(__dirname + '/public/favicon.ico')); // Path of the favicon
app.use(methodOverride());
app.use(session({ // Activamos las sesiones para el servidor
	resave: true,
	saveUninitialized: true,
	secret: 'codeando866' })
);

// midleware
app.use(function(req, res, next) {
	// Damos acceso a los dispositivos
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
	next();
});

// Rutas del servidor (Ruta principal)
app.get('/', function (req, res){
	res.send('Bienvenido al api rest');
});

// Exportamos las rutas del CRUD
require('./controllers/avisosController')(app);
require('./controllers/capitulosController')(app);
require('./controllers/categoriasController')(app);
require('./controllers/contactoController')(app);
require('./controllers/cursosController')(app);
require('./controllers/sitemapController')(app);
require('./controllers/usersController')(app);

// Corremos el servidor
app.listen(PORT, function (){
	console.log("Servidor corriendo en el puerto: " + PORT);
});
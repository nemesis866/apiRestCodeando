/*
* Modelo para la tabla usuarios temporales
*
* Autor: Paulo Andrade
* Email: Source.compu@gmail.com
* Date: 20/12/2016
* Update: 20/12/2016
*/

// Importamos las librerias requeridas
var mongoose = require('mongoose'),
	Schema = mongoose.Schema; // ORM

// Creamos la coleccion (tabla) usuarios
var usersTemp = new Schema({
	username: { type: String, required: true}, // *
	password: String,
	email: { type: String, required: true } // *
});

// Exportamos el modelo
module.exports = mongoose.model('usersTemp', usersTemp);
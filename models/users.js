/*
* Modelo para la tabla usuarios
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
var users = new Schema({
	avatar: String,
	email: { type: String, required: true }, // *
	fbid: { type: Number, default: 0 },
	fecha: { type: Date, default: Date.now },
	id: { type: Number },
	nivel_user: { type: Number, default: 1 },
	nombre: { type: String, default: 'Guest' },
	password: String,
	puntos: { type: Number, default: 0 },
	registro: String,
	registro: { type: String, default: 'YES' },
	ultimo_acceso: { type: Date, default: Date.now },
	username: { type: String, required: true} // *
});

// Exportamos el modelo
module.exports = mongoose.model('users', users);
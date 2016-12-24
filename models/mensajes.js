/*
* Modelo para la tabla mensajes
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
var mensajes = new Schema({
	fecha: { type: Date, default: Date.now },
	mensaje: String,
	user: { type: String, required: true }, // *
	visitante: { type: Number, required: true } // *
});

// Exportamos el modelo
module.exports = mongoose.model('mensajes', mensajes);
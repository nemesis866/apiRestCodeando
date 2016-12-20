/*
* Modelo para la tabla contacto
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
var contacto = new Schema({
	asunto: String,
	contenido: String,
	email: String,
	fecha: { type: Date, default: Date.now },
	leido: { type: String, default: 'NO' },
	name: String
});

// Exportamos el modelo
module.exports = mongoose.model('contacto', contacto);
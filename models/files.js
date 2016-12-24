/*
* Modelo para la tabla archivos
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
var files = new Schema({
	contenido: String,
	control: { type: Number, default: 0 },
	ext: String,
	fecha: { type: Date, default: Date.now },
	id_discusion: { type: String, required: true }, // *
	name: { type: String, required: true }, // *
	size: Number,
	type: { type: String, default: 'DIS' },
	user: { type: String, required: true } // *
});

// Exportamos el modelo
module.exports = mongoose.model('files', files);
/*
* Modelo para la tabla capitulos
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
var capitulos = new Schema({
	id_curso: { type: Number, required: true }, // *
	titulo: String,
	autor: { type: Number, required: true }, // *
	orden: Number,
	visibility: { type: String, default: 'NO' },
});

// Exportamos el modelo
module.exports = mongoose.model('capitulos', capitulos);
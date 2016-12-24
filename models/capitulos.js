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
	id_curso: { type: String, required: true }, // *
	titulo: String,
	autor: { type: String, required: true }, // *
	orden: Number
});

// Exportamos el modelo
module.exports = mongoose.model('capitulos', capitulos);
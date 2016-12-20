/*
* Modelo para la tabla avisos
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
var avisos = new Schema({
	contenido: String,
	fecha: { type: Date, default: Date.now },
	id_curso: { type: Number, required: true } // *
});

// Exportamos el modelo
module.exports = mongoose.model('avisos', avisos);
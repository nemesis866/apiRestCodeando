/*
* Modelo para la tabla respuestas
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
var respuestas = new Schema({
	id_discusion: { type: Number, required: true }, // *
	id_curso: { type: Number, required: true }, // *
	contenido: String,
	autor: { type: Number, required: true }, // *
	fecha: { type: Date, default: Date.now },
	votos: { type: Number, default: 0 }
});

// Exportamos el modelo
module.exports = mongoose.model('respuestas', respuestas);
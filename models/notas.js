/*
* Modelo para la tabla notas
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
var notas = new Schema({
	fecha: { type: Date, default: Date.now },
	id_curso: { type: String, required: true }, // *
	nota: { type: String, default: 'Nota' },
	user: { type: String, required: true } // *
});

// Exportamos el modelo
module.exports = mongoose.model('notas', notas);
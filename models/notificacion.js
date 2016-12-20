/*
* Modelo para la tabla notificaciones
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
var notificaciones = new Schema({
	fecha: { type: Date, default: Date.now },
	id_curso: { type: Number, required: true }, // *
	id_discusion: { type: Number, required: true }, // *
	status: { type: String, default: 'NO' },
	texto: String,
	type: { type: String, default: 'DIS' },
	user: { type: Number, required: true } // *
});

// Exportamos el modelo
module.exports = mongoose.model('notificaciones', notificaciones);
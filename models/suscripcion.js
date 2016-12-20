/*
* Modelo para la tabla suscripcion
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
var suscripcion = new Schema({
	id_curso: { type: Number, required: true }, // *
	user: { type: Number, required: true }, // *
	fecha: { type: Date, default: Date.now }
});

// Exportamos el modelo
module.exports = mongoose.model('suscripcion', suscripcion);
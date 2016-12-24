/*
* Modelo para la tabla control de respuestas
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
var controlRes = new Schema({
	id_respuesta: { type: String, required: true }, // *
	user: { type: String, required: true } //*
});

// Exportamos el modelo
module.exports = mongoose.model('controlRes', controlRes);
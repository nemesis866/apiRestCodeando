/*
* Modelo para la tabla control de discusiones
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
var controlDis = new Schema({
	id_discusion: { type: Number, required: true }, // *
	user: { type: Number, required: true } //*
});

// Exportamos el modelo
module.exports = mongoose.model('controlDis', controlDis);
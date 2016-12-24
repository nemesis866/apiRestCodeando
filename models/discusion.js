
/*
* Modelo para la tabla discusiones
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
var discusiones = new Schema({
	autor: { type: String, required: true }, // *
	contenido: String,
	fecha: { type: Date, default: Date.now },
	id_curso: { type: String, required: true },
	link: String,
	respuestas: { type: Number, default: 0 },
	titulo: { type: String, default: 'Discusion' },
	votos: { type: Number, default 0 }
});

// Exportamos el modelo
module.exports = mongoose.model('discusiones', discusiones);
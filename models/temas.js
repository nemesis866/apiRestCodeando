/*
* Modelo para la tabla temas
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
var temas = new Schema({
	id_curso: { type: String, required: true }, // *
	id_capitulo: { type: String, required: true }, // *
	titulo: { type: String, default: 'Tema nuevo' },
	autor: { type: String, required: true }, // *
	info: { type: String, default: 'Informacion del tema' },
	doc: { type: String, default: 'Documentacion del tema' },
	video: { type: String, default: '' },
	github: String,
	orden: { type: Number },
	visibility: { type: String, default: 'NO' }
});

// Exportamos el modelo
module.exports = mongoose.model('temas', temas);
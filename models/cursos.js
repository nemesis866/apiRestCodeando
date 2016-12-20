/*
* Modelo para la tabla cursos
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
var cursos = new Schema({
	autor: { type: Number, required: true }, // *
	categoria: String,
	description: String,
	fecha: { type: Date, default: Date.now },
	fecha_update: { type: Date, default: Date.now },
	img: { type: String, default: '' },
	instruccion: String,
	public: { type: String, default: 'NO' },
	requeriment: String,
	revision: { type: String, default: 'NO' },
	subtitulo: String,
	titulo: { type: String, default: 'Titulo del curso' },
	url: String
});

// Exportamos el modelo
module.exports = mongoose.model('cursos', cursos);
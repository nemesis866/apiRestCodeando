/*
* Modelo para la tabla categorias
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
var categorias = new Schema({
	nombre: String
});

// Exportamos el modelo
module.exports = mongoose.model('categorias', categorias);
/*
* Modelo para la tabla sitemap
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
var sitemap = new Schema({
	registro: Number
});

// Exportamos el modelo
module.exports = mongoose.model('sitemap', sitemap);
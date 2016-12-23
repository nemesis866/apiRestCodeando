/*
* CRUD API REST - Avisos
*
* Autor: Paulo Andrade
* Email: Source.compu@gmail.com
* Date: 21/12/2016
* Update: 21/12/2016
*/

// Creamos un modulo para el controlador
// @param app aplicacion de express
module.exports = function (app)
{
	// Importamos los modelos
	var avisos = require('./../models/avisos');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los avisos
	var findAllAvisos = function (req, res)
	{
		avisos.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un aviso en concreto
	var findAvisoById = function (req, res)
	{
		// Pasamos como parametro el id de la categoria
		avisos.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un aviso nuevo
	var addAviso = function (req, res)
	{
		var aviso = new avisos({
			contenido: req.body.contenido,
			id_curso: req.body.id_curso
		});

		// Guardamos el registro
		aviso.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(aviso);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un contacto
	var updateAviso = function (req, res)
	{
		avisos.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.contenido = req.body.contenido;
				content.id_curso = req.body.id_curso;

				// Guardamos los datos
				content.save(function (err){
					if(!err) console.log('Actualizado con exito');
					else console.log('Error: ' + err);		
				});

				// Mostramos en pantalla
				res.send(content);
			} else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos DELETE
	********************************************/

	// Eliminamos un contacto
	var deleteAviso = function (req, res)
	{
		// Buscamos el contacto
		avisos.findById(req.params.id, function (err, content){
			// Eliminamos el contacto
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	// Generamos las rutas
	app.get('/avisos', findAllAvisos);
	app.get('/avisos/:id', findAvisoById);
	app.post('/avisos', addAviso);
	app.put('/avisos/', updateAviso);
	app.delete('/avisos/:id', deleteAviso);
}
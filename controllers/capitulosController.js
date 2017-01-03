/*
* CRUD API REST - Capitulos
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
	var capitulos = require('./../models/capitulos');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los capitulos
	var findAllCapitulos = function (req, res)
	{
		capitulos.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un capitulo en concreto
	var findCapituloById = function (req, res)
	{
		// Pasamos como parametro el id de la categoria
		capitulos.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos los capitulos de un curso en concreto
	var findCapituloByCurso = function (req, res)
	{
		// Pasamos como paraetro el ID del curso
		capitulos.find({ id_curso: req.params.id }, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);	
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un capitulo nuevo
	var addCapitulo = function (req, res)
	{
		var capitulo = new capitulos({
			id_curso: req.body.id,
			titulo: req.body.titulo,
			autor: req.body.autor,
			orden: req.body.orden
		});

		// Guardamos el registro
		capitulo.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(capitulo);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un capitulo
	var updateCapitulo = function (req, res)
	{
		capitulos.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.titulo = req.body.titulo;
				content.orden = req.body.orden;

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

	// Eliminamos un capitulo
	var deleteCapitulo = function (req, res)
	{
		// Buscamos el contacto
		capitulos.findById(req.params.id, function (err, content){
			// Eliminamos el contacto
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});

			res.send(content);
		});
	}

	// Generamos las rutas
	app.get('/chapters', findAllCapitulos);
	app.get('/chapters/:id', findCapituloById);
	app.get('/chapters/course/:id', findCapituloByCurso);
	app.post('/chapters', addCapitulo);
	app.put('/chapters/', updateCapitulo);
	app.delete('/chapters/:id', deleteCapitulo);
}
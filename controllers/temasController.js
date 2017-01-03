/*
* CRUD API REST - Temas
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
	var temas = require('./../models/temas');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los temas
	var findAllTemas = function (req, res)
	{
		temas.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un tema en concreto
	var findTemaById = function (req, res)
	{
		// Pasamos como parametro el id del tema
		temas.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos los temas de un capitulo en concreto
	var findTemaByCapitulo = function (req, res)
	{
		// Pasamos como paraetro el ID del caitulo
		temas.find({ id_capitulo: req.params.capitulo, id_curso: req.params.curso }, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);	
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un tema nuevo
	var addTema = function (req, res)
	{
		var tema = new temas({
            id_capitulo: req.body.capitulo,
			id_curso: req.body.curso,
			titulo: req.body.titulo,
			autor: req.body.autor,
			orden: req.body.orden
		});

		// Guardamos el registro
		tema.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(tema);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un tema
	var updateTema = function (req, res)
	{
		temas.findById(req.body.id, function (err, content){
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

	// Eliminamos un tema
	var deleteTema = function (req, res)
	{
		// Buscamos el tema
		temas.findById(req.params.id, function (err, content){
			// Eliminamos el contacto
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});

			res.send(content);
		});
	}

	// Generamos las rutas
	app.get('/themes', findAllTemas);
	app.get('/themes/:id', findTemaById);
	app.get('/themes/chapters/:capitulo/:curso', findTemaByCapitulo);
	app.post('/themes', addTema);
	app.put('/themes/', updateTema);
	app.delete('/themes/:id', deleteTema);
}
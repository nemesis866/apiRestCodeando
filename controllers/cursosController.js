/*
* CRUD API REST - Cursos
*
* Autor: Paulo Andrade
* Email: Source.compu@gmail.com
* Date: 20/12/2016
* Update: 20/12/2016
*/

// Creamos un modulo para el controlador
// @param app aplicacion de express
module.exports = function (app)
{
	// Importamos los modelos
	var cursos = require('./../models/cursos');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los cursos
	var findAllCursos = function (req, res)
	{
		cursos.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un curso en concreto
	var findCursoById = function (req, res)
	{
		// Pasamos como parametro el id del curso
		cursos.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un curso nuevo
	var addCurso = function (req, res)
	{
		// Modelo para guardar registro por facebook
		var curso = new cursos({
			autor: req.body.autor,
			categoria: req.body.categoria,
			description: req.body.descripcion,
			img: req.body.img,
			instruccion: req.body.instruccion,
			requeriment: req.body.requeriment,
			subtitulo: req.body.subtitulo,
			titulo: req.body.titulo,
			url: req.body.url
		});

		// Guardamos el registro
		curso.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(curso);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un curso
	var updateCurso = function (req, res)
	{
		cursos.findById(req.params.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				// Si existe actualizamos la información
				content.autor = req.body.data['autor'];
				content.categoria = req.body.data['categoria'];
				content.description = req.body.data['descripcion'];
				content.fecha_update = Date.now;
				content.img = req.body.data['img'];
				content.instruccion = req.body.data['instruccion'];
				content.requeriment = req.body.data['requeriment'];
				content.subtitulo = req.body.data['subtitulo'];
				content.titulo = req.body.data['titulo'];
				content.url = req.body.data['url'];

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

	// Eliminamos un curso
	var deleteCurso = function (req, res)
	{
		// Buscamos el usuario
		cursos.findById(req.params.id, function (err, content){
			// Eliminamos el curso
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	// Generamos las rutas
	app.get('/cursos', findAllCursos);
	app.get('/cursos/:id', findCursoById);
	app.post('/cursos', addCurso);
	app.put('/cursos/:id', updateCurso);
	app.delete('/cursos/:id', deleteCurso);
}
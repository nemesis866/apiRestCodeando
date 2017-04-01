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
    var capitulos = require('./../models/capitulos');
    var temas = require('./../models/temas');

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
    
    // Obtenemos los cursos de un solo autor
    var findCursoByAutor = function (req, res)
	{
		// Pasamos como paraetro el ID del autor
		cursos.find({ autor: req.params.id }, function (err, content){
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
			description: req.body.description,
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
		cursos.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				// Si existe actualizamos la información
				content.autor = req.body.autor;
				content.categoria = req.body.categoria;
				content.description = req.body.description;
				content.img = req.body.img;
				content.instruccion = req.body.instruccion;
				content.requeriment = req.body.requeriment;
				content.subtitulo = req.body.subtitulo;
				content.titulo = req.body.titulo;
				content.url = req.body.url;

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
		// Buscamos los capitulos del curso
        capitulos.find({ id_curso: req.params.id }, function (err, content){
			// Eliminamos los capitulos del curso
            for(var i = 0; i < content.length; i++){
                content[i].remove(function (err){
                    if(!err) console.log('Eliminado con exito');
                    else console.log('Error: ' + err);		
                });
            }
		});
        
        // Buscamos los temas del curso
        temas.find({ id_curso: req.params.id }, function (err, content){
			// Eliminamos los temas del curso
            for(var i = 0; i < content.length; i++){
                content[i].remove(function (err){
                    if(!err) console.log('Eliminado con exito');
                    else console.log('Error: ' + err);		
                });   
            }
		});
        
        // Buscamos el curso
		cursos.findById(req.params.id, function (err, content){
			// Eliminamos el curso
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});

			res.send(content);
		});
	}

	// Generamos las rutas
	app.get('/cursos', findAllCursos);
	app.get('/cursos/:id', findCursoById);
    app.get('/cursos/autor/:id', findCursoByAutor);
	app.post('/cursos', addCurso);
	app.put('/cursos', updateCurso);
	app.delete('/cursos/:id', deleteCurso);
}
/*
* CRUD API REST - Archivos para temas
*
* Autor: Paulo Andrade
* Email: Source.compu@gmail.com
* Date: 08/04/2017
* Update: 08/04/2017
*/

// Creamos un modulo para el controlador
// @param app aplicacion de express
module.exports = function (app)
{
	// Importamos los modelos
	var filesTema = require('./../models/filesTema');

    /********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los archivos
	var findAllFile = function (req, res)
	{
		filesTema.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un archivo en concreto
	var findFileById = function (req, res)
	{
		// Pasamos como parametro el id del archivo
		filesTema.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}
    
    // Obtenemos los archivos de un solo tema
    var findFileByTheme = function (req, res)
	{
		// Pasamos como paraetro el ID del tema
		filesTema.find({ id_tema: req.params.id }, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);	
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un archivo nuevo
	var addFile = function (req, res)
	{
		// Modelo para guardar
		var file = new filesTema({
            contenido: req.body.contenido,
            ext: req.body.ext,
            id_tema: req.body.id, // *
            name: req.body.name, // *
            size: req.body.size
		});

		// Guardamos el registro
		file.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(file);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un archivo
	var updateFile = function (req, res)
	{
		filesTema.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				// Si existe actualizamos la información
				content.contenido = req.body.contenido;
                content.ext = req.body.ext;
                content.name = req.body.name; // *
                content.size = req.body.size;

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

	// Eliminamos un archivo
	var deleteFile = function (req, res)
	{
		// Buscamos los capitulos del curso
        filesTema.findById(req.body.id, function (err, content){
			// Eliminamos el archivo
            content.remove(function (err){
                if(!err) console.log('Eliminado con exito');
                else console.log('Error: ' + err);		
            });
		});
	}

	// Generamos las rutas
	app.get('/files', findAllFile);
	app.get('/files/:id', findFileById);
    app.get('/files/tema/:id', findFileByTheme);
	app.post('/files', addFile);
	app.put('/files', updateFile);
	app.delete('/files/:id', deleteFile);
}
/*
* CRUD API REST - Categorias
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
	var categories = require('./../models/categorias');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todas las categorias
	var findAllCategories = function (req, res)
	{
		categories.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos una categoria en concreto
	var findCategoryById = function (req, res)
	{
		// Pasamos como parametro el id de la categoria
		categories.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos una categoria nueva
	var addCategory = function (req, res)
	{
		var category = new categories({
			titulo: req.body.titulo,
		});

		// Guardamos el registro
		category.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(category);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos una categoria
	var updateCategory = function (req, res)
	{
		categories.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.titulo = req.body.titulo;

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

	// Eliminamos una categoria
	var deleteCategory = function (req, res)
	{
		// Buscamos la categoria
		categories.findById(req.params.id, function (err, content){
			// Eliminamos el usuario
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});

			res.send(content);
		});
	}

	// Generamos las rutas
	app.get('/categories', findAllCategories);
	app.get('/categories/:id', findCategoryById);
	app.post('/categories', addCategory);
	app.put('/categories', updateCategory);
	app.delete('/categories/:id', deleteCategory);
}
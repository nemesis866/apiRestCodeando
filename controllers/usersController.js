/*
* CRUD API REST - Usuarios
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
	var users = require('./../models/users');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los usuarios
	var findAllUsers = function (req, res)
	{
		users.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un usuario en concreto
	var findUserById = function (req, res)
	{
		// Pasamos como parametro el id del usuario
		users.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un usuario nuevo
	var addUser = function (req, res)
	{
		// Verificamos si el registro ya existe en la DB
		users.findOne({ fbid: req.body.data['id'] }, function (err, content){
			if(!err){
				// Si no existe creamos un registro nuevo
				if(content.length === 0){
					// Modelo para guardar registro por facebook
					var user = new users({
						username: req.body.data['name'],
						registro: 'NO',
						email: req.body.data['email'],
						nombre: req.body.data['name'],
						fbid: req.body.data['id']
					});

					// Guardamos el registro
					user.save(function (err){
						if(!err) console.log('Guardado con exito');
						else console.log('Error: ' + err);
					});

					// Mostramos en pantalla
					res.send(user);
				} else {
					// Actualizamos
					content = update(content);

					// Mostramos en pantalla
					res.send(content);
				}
			}
			// Si hay error lo mostramos
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un usuario
	var updateUser = function (req, res)
	{
		users.findById(req.params.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content = update(content);

				// Mostramos en pantalla
				res.send(content);
			} else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos DELETE
	********************************************/

	// Eliminamos un usuario
	var deleteUser = function (req, res)
	{
		// Buscamos el usuario
		users.findById(req.params.id, function (err, content){
			// Eliminamos el usuario
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	/********************************************
	Metodos genericos
	********************************************/

	var update = function (content)
	{
		// Obtenemos la fecha actual
		var fecha = new Date();

		// Si existe actualizamos la información
		content.username = req.body.data['name'];
		content.nombre = req.body.data['name'];
		content.ultimo_acceso = fecha.getFullYear();

		// Guardamos los datos
		content.save(function (err){
			if(!err) console.log('Actualizado con exito');
			else console.log('Error: ' + err);		
		});

		return content;		
	}

	// Generamos las rutas
	app.get('/users', findAllUsers);
	app.get('/users/:id', findUserById);
	app.post('/users', addUser);
	app.put('/users/:id', updateUser);
	app.delete('/users/:id', deleteUser);
}
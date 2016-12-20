/*
* CRUD API REST - Contacto
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
	var contactos = require('./../models/contacto');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los mensajes
	var findAllContactos = function (req, res)
	{
		contactos.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos una categoria en concreto
	var findContactoById = function (req, res)
	{
		// Pasamos como parametro el id de la categoria
		contactos.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un contacto nuevo
	var addContacto = function (req, res)
	{
		var contacto = new contactos({
			asunto: req.body.data['asunto'],
			contenido: req.body.data['contenido'],
			email: req.body.data['email'],
			name: req.body.data['name']
		});

		// Guardamos el registro
		contacto.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(contacto);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un contacto
	var updateContacto = function (req, res)
	{
		contactos.findById(req.params.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.asunto = req.body.data['asunto'];
				content.contenido = req.body.data['contenido'];
				content.email = req.body.data['email'];
				content.name = req.body.data['name'];

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
	var deleteContacto = function (req, res)
	{
		// Buscamos el contacto
		contactos.findById(req.params.id, function (err, content){
			// Eliminamos el contacto
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	// Generamos las rutas
	app.get('/contacto', findAllContactos);
	app.get('/contacto/:id', findContactoById);
	app.post('/contacto', addContacto);
	app.put('/contacto/:id', updateContacto);
	app.delete('/contacto/:id', deleteContacto);
}
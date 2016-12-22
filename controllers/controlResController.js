/*
* CRUD API REST - Control para respuestas
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
	var controlRes = require('./../models/controlRes');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los controles
	var findAllControlRes = function (req, res)
	{
		controlRes.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un control en especifico
	var findControlResById = function (req, res)
	{
		// Pasamos como parametro el id del control
		controlRes.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un control nuevo
	var addControlRes = function (req, res)
	{
		var control = new controlRes({
			id_respuesta: req.body.id_discusion,
			user: req.body.user
		});

		// Guardamos el registro
		control.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(control);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un control
	var updateControlRes = function (req, res)
	{
		controlRes.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.id_respuesta = req.body.id_discusion;
				content.user = req.body.user;

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

	// Eliminamos un control
	var deleteControlRes = function (req, res)
	{
		// Buscamos el control
		controlRes.findById(req.params.id, function (err, content){
			// Eliminamos el control
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	// Generamos las rutas
	app.get('/control-res', findAllControlRes);
	app.get('/control-res/:id', findControlResById);
	app.post('/control-res', addControlRes);
	app.put('/control-res', updateControlRes);
	app.delete('/control-res/:id', deleteControlRes);
}
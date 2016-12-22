/*
* CRUD API REST - Control para discusiones
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
	var controlDis = require('./../models/controlDis');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los controles
	var findAllControlDis = function (req, res)
	{
		controlDis.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un control en especifico
	var findControlDisById = function (req, res)
	{
		// Pasamos como parametro el id del control
		controlDis.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un control nuevo
	var addControlDis = function (req, res)
	{
		var control = new controlDis({
			id_discusion: req.body.id_discusion,
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
	var updateControlDis = function (req, res)
	{
		controlDis.findById(req.body.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.id_discusion = req.body.id_discusion;
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
	var deleteControlDis = function (req, res)
	{
		// Buscamos el control
		controlDis.findById(req.params.id, function (err, content){
			// Eliminamos el control
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	// Generamos las rutas
	app.get('/control-dis', findAllControlDis);
	app.get('/control-dis/:id', findControlDisById);
	app.post('/control-dis', addControlDis);
	app.put('/control-dis', updateControlDis);
	app.delete('/control-dis/:id', deleteControlDis);
}
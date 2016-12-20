/*
* CRUD API REST - sitemap
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
	var sitemaps = require('./../models/sitemap');

	/********************************************
	Metodos GET
	********************************************/

	// Obtenemos todos los sitemaps
	var findAllSitemaps = function (req, res)
	{
		sitemaps.find(function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	// Obtenemos un sitempa en concreto
	var findSitemapById = function (req, res)
	{
		// Pasamos como parametro el id del sitemap
		sitemaps.findById(req.params.id, function (err, content){
			if(!err) res.send(content);
			else console.log('Error: ' + err);
		});
	}

	/********************************************
	Metodos POST
	********************************************/

	// Agregamos un sitemap nuevo
	var addSitemap = function (req, res)
	{
		var sitemap = new sitemaps({
			registro: req.body.data['registro']
		});

		// Guardamos el registro
		sitemap.save(function (err){
			if(!err) console.log('Guardado con exito');
			else console.log('Error: ' + err);
		});

		// Mostramos en pantalla
		res.send(sitemap);
	}

	/********************************************
	Metodos PUT
	********************************************/

	// Actualizamos un sitemap
	var updateSitemap = function (req, res)
	{
		sitemaps.findById(req.params.id, function (err, content){
			if(!err){
				// Actualizamos los datos
				content.registro = req.body.data['registro'];

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

	// Eliminamos un sitemap
	var deleteSitemap = function (req, res)
	{
		// Buscamos el contacto
		sitemaps.findById(req.params.id, function (err, content){
			// Eliminamos el contacto
			content.remove(function (err){
				if(!err) console.log('Eliminado con exito');
				else console.log('Error: ' + err);		
			});
		});
	}

	// Generamos las rutas
	app.get('/sitemap', findAllSitemaps);
	app.get('/sitemap/:id', findSitemapById);
	app.post('/sitemap', addSitemap);
	app.put('/sitemap/:id', updateSitemap);
	app.delete('/sitemap/:id', deleteSitemap);
}
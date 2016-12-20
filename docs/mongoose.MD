Documentación de DB no relacional con Mongoose
==============================================

MongoDB es un gestor de base de datos , el cual se programa con javascript.

# MongoDB

## Instalacion

Para instalarlo debemos instalar la siguiente libreria.-

```js
npm install -D mongoose
```

Y la incluimos en nuestro servidor de express.-

```js
mongoose = require('mongoose');
```

## configuracion

```js
mongoose.connect('mongodb://localhost/dbName', function (err, res){
	// Verificamos si tiene algun error
	if(err) console.log('Error conectando a la DB: ' + err);
	else console.log('Conexion establecida a la DB :)');
});
```

La configuracion es muy sencilla, utilizamos el metodo connect() de mongodb para crear una conexion a nuestra base de datos, este metodo recibe dos parametros.-

1.- Un String con los parametros de conexion
2.- Un callback que nos informa si la conexion fue exitosa o existio algun error.

# Comandos para mongoDB

## Iniciar mongoDB

```
sudo service mongod start
```

## Detener mongoDB

```
sudo service mongod stop
```

## Reiniciar mongoDB

```
sudo service mongod restart
```

# Schema

Un schema es una coleccion de datos (se podria ver como una tabla en otros gestores).

## Crear un schema

Lo ideal para un schema es crearlo en un archivo separado para tener un mejor control de este, asi que lo primero que debemos hacer es importar las librerias requeridas.-

```js
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
```

Ahora creamos un schema, enseguida muestro un ejemplo con diferentes opciones.-

```js
// Creamos un schema
var users = new Schema({
	// Datos del schema
	username: { type: String, required: true}, // tipo string y obligatorio
	password: String, // tipo String
	nombre: { type: String, default: 'Guest' }, // Tipo string y con valor por defecto
	nivel_user: { type: Number, default: 1 }, // Tipo numerico y con valor por defecto
	fecha: { type: Date, default: Date.now }, // Tipo date y con valor por defecto
});
```

Por ultimo importamos el schema.-

```js
// el nombre para el modulo es users
module.exports = mongoose.model('users', users);
```

## Utilizar un schema

Una ves creado el schema para utilizarlo hay que importarlo en el controlador, este controlador es un archivo nuevo donde se crearan los metodos para la manipulacion de informacion del schema (por ejemplo si el schema se llama users.js, el controlador se puede llamar usersController.js).-

```js
// Creamos el modulo para el controlador
module.exports = function (app)
{
	// Importamos el modelo
	var users = require('./../models/users');
}
```

### GET (Obtener datos)

Obtenemos todos los datos.-

```js
// Creamos una funcion para recuperar los datos
var findAllUsers = function (req, res)
{
	// Con el metodo find() obtenemos todos los datos
	users.find(function (err, content){
		// Verificamos si hay algun error en la solicitud
		if(!err) res.send(content);
		else console.log('Error: ' + err);
	});
}
```

Obtenemos un dato en especifico mediante el ID.-

```js
// Creamos una funcion para obtener un usuario en concreto
var findUserById = function (req, res)
{
	// Lo hacemos con ayuda del metodo findById()
	// Pasamos como parametro el id del usuario
	users.findById(req.params.id, function (err, content){
		if(!err) res.send(content);
		else console.log('Error: ' + err);
	});
}
```

Creamos las rutas para estas funciones

```js
// Pasamos como parametros la ruta
// y la funcion a lanzarce al entrar a esa ruta
app.get('/users', findAllUsers);
app.get('/users/:id', findUserById);
```

### POST (guardar datos)


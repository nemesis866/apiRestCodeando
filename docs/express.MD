Documentación de librerias, metodos y propiedades usadas con ExpressJS
======================================================================

ExpressJS es un framework de desarrollo web para nodejs, la documentación explicada en este documento refiere a la versión 4.X del framework en cuestion.

# Librerias

Las librerias utilizadas hay que instalarlas e incluirlas a nuestro servidor (recuerda crear el archivo package.json).


```js
npm install -D nombre_libreria
```

Nota.- El flag -D hace referencia a --dev-save, todas las librerias se instalaran y se creara una referencia en el package.json.

# Librerias para configuracion de express

## body-parser

Es utilizado para el parseo de las peticiones post (sean json o no) y nos devuelve el resultado del parseo accesible vía la variable req.body.

```js
npm install -D body-parser
```

Para uilizarlo seguimos estos pasos.-

```js
// Incluimos las librerias
var express = require('express');
var bodyParser = require('body-parser');

// Creamos la aplicacion de express
var app = express();
// Lo configuramos
app.use(bodyParser());
```

## cookie-parser

Es utilizado para el parseo de las cookies y nos devuelve el resultado del parseo accesible vía la variable req.cookies.

```js
npm install -D cookie-parser
```

Para uilizarlo seguimos estos pasos.-

```js
// Incluimos las librerias
var express = require('express');
var cookieParser = require('cookie-parser');

// Creamos la aplicacion de express
var app = express();
// Configuarcion
app.use(cookieParser());
```

## method-override

Nos permite utilizar verbos HTTP como PUT y DELETE

```js
npm install -D method-override
```

Para uilizarlo seguimos estos pasos.-

```js
// Incluimos las librerias
var express = require('express');
var methodOverride = require('method-override');

// Creamos la aplicacion de express
var app = express()
// Configuarcion
app.use(methodOverride());
```

## express-session

Nos permite activar las sesiones para nuestro servidor

```js
npm install -D express-session
```

Para uilizarlo seguimos estos pasos.-

```js
// Incluimos las librerias
var express = require('express');
var session = require('express-session');

// Creamos la aplicacion de express
var app = express()
// Configuarcion
app.use(session({ // Activamos las sesiones para el servidor
	resave: true,
	saveUninitialized: true,
	secret: 'key_secret' })
);
```
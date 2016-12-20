Documentación de librerias, metodos y propiedades usadas con ExpressJS
======================================================================

ExpressJS es un framework de desarrollo web para nodejs, la documentación explicada en este documento refiere a la versión 4.X del framework en cuestion.

# Librerias

Las librerias utilizadas hay que instalarlas e incluirlas a nuestro servidor (recuerda crear el archivo package.json).


```js
npm install -D nombre_libreria
```

Nota.- El flag -D hace referencia a --dev-save, todas las librerias se instalaran y se creara una referencia en el package.json.

## body-parser

Es utilizado para el parseo de las peticiones post (sean json o no) y nos devuelve el resultado del parseo accesible vía la variable req.body.

```js
npm install -D body-parser
```

Para uilizarlo seguimos estos pasos.-

```js
// Lo incluimos al servidor
var bodyParser = require('body-parser');
// Lo configuramos
app.use(bodyParser());
```

## cookie-parser


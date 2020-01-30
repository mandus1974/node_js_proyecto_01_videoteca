// REQUIRE
var express = require('express');
var morgan = require('morgan')


// declaraciones
var app = express();
const config = require("config");
const app_tipo = config.get("app.tipo");

// Middleware
app.use(morgan('tiny'));

// Mensaje de configuracion Principal
console.log("Tipo de APP  =" + app_tipo);




app.get('/', function (req, res) {
  res.send('Hola Mundo!');
});

app.listen( process.env.PORT, function () {
  console.log('Example app listening on port !');
  console.log(process.env.PORT);
});

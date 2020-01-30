// REQUIRE
var express = require('express');
var morgan = require('morgan')
const config = require("config");
const Joi = require("@hapi/joi");


// declaraciones
var app = express();
const app_tipo = config.get("app.tipo");
const debug_main = require("debug")("app:main");
const debug_second = require("debug")("app:second");

// Middleware
app.use(morgan('tiny'));


/// SHEMAS

const schema = Joi.object({
  nombre:Joi.string().min(3).required()
});

const {error, value} = schema.validate({nombre:"juan"});
if(error)
  console.log(error);
else
  console.log(value, " VALIDO !!");


// Mensaje de configuracion Principal
console.log("Tipo de APP  =" + app_tipo);
debug_main("Habilitado Debug=app:main");
debug_second("Habilitado Debug=app:second");



app.get('/', function (req, res) {
  res.send('Hola Mundo!');
});

app.listen( process.env.PORT, function () {
  console.log('Example app listening on port !');
  console.log(process.env.PORT);
});

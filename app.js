// REQUIRE
var express = require('express');
var morgan = require('morgan')
const config = require("config");
const Joi = require("@hapi/joi");

// REQUIRE PROPIOS
const fnGenerales = require("./lib/fnGenerales");

// declaraciones
var app = express();
const app_tipo = config.get("app.tipo");
const debug_main = require("debug")("app:main");
const debug_second = require("debug")("app:second");

// Middleware
app.use(morgan('tiny'));
app.use(express.json());


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


// ---------- VIDEOTECA -------------

const videoteca = [
  {id:1, nombre : "TRON", year : 1984, gen : "FiSci", cal : 10, resumen : "dentro de mundo virtual" },
  {id : 2, nombre : "MATRIX", year : 1999, gen : "FiSci", cal : 10, resumen : "dentro de mundo virtual" },
  {id : 3, nombre : "HP", year : 2001, gen : "Fantasia", cal : 10, resumen : "mundo mágico" }
];

// ------------------- GET ----------------------
app.get('/', function (req, res) {
  res.send('vt = Videoteca');
});

app.get('/vt', function (req, res) {
  res.send(videoteca);
});

app.get('/vt/:id', function (req, res) {  
  video = fnGenerales.buscar_por_id(videoteca, req.params.id);   
  if(video)
    res.send(video);
  else
    res.send(`Id ${req.params.id} no encontrado`);
});

app.get('/vt/:nombre', function (req, res) {  
  video = fnGenerales.buscar_por_nombre(videoteca, req.params.nombre);   
  if(video)
    res.send(video);
  else
    res.send(`Nombre ${req.params.nombre} no encontrado`);
});



// ------------------- POST ----------------------
app.post('/vt/',(req, res) =>{  
  video = fnGenerales.buscar_por_nombre(videoteca, req.body.nombre);  
  res.send(video);
});


//  ===== LISTEN
app.listen( process.env.PORT, function () {
  console.log('Example app listening on port !');
  console.log(process.env.PORT);
});



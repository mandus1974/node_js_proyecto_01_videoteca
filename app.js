// REQUIRE
var express = require('express');
var morgan = require('morgan')

// app express
var app = express();

// Middleware
app.use(morgan('combined'))




app.get('/', function (req, res) {
  res.send('Hola Mundo!');
});

app.listen( process.env.PORT, function () {
  console.log('Example app listening on port !');
  console.log(process.env.PORT);
});

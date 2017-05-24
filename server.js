// Server file required for Heroku
// Contains all the basic API HTTP methods
// Written by Alan Niemiec

    //Resources
//Require the Express resource for handling NodeJS API
const express = require('express');

//Define a expression application
var app = express();

//Base get request for the homepage
app.get('/', function (req, res){
  res.send('Hello World!');
});

//Start listening for requests to the API on port 3030
app.listen(3000);

// Server file required for Heroku
// Contains all the basic API HTTP methods
// Written by Alan Niemiec

    //Resources
//Require the Express resource for handling NodeJS API
const express = require('express');

//Define a expression application
var app = express();

//Base get request for the homepage
//Can be called with curl localhost:3000
app.get('/', function (req, res){
  res.send('Get called.');
});

//Post request for the homepage
app.post('/' , function (req, res){
  res.send('Post called.');
});

//Put request for the homepage
app.put('/', function(req, res){
  res.send("Put called");
});

//Delete request for the homepage
app.delete('/', function(req, res){
  res.send("Delete called");
});

//Start listening for requests to the API on port 3030
app.listen(3000);

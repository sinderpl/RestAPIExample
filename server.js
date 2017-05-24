// Server file required for Heroku
// Contains all the basic API HTTP methods
// Written by Alan Niemiec

    //Resources
//Require the Express resource for handling NodeJS API
const express = require('express');

//Define a express application
var app = express();


    //Methods defined
//Base get request for the homepage
//Can be called with ' curl localhost:3000 '
app.get('/get', function (req, res){
  res.send('Get called.');
});

//Post request for the homepage
//Can be called with ' curl localhost:3000/post '
app.post('/post' , function (req, res){
  res.send('Post called.');
});

//Put request for the homepage
//Can be called with ' curl localhost:3000/put '
app.put('/put', function(req, res){
  res.send("Put called");
});

//Delete request for the homepage
//Can be called with ' curl localhost:3000/delete '
app.delete('/delete', function(req, res){
  res.send("Delete called");
});

//The following code allows for input from all the HTTP requests,
// it is a more universal type of method.
//Can be called with ' curl localhost:3000/all '
app.all('/all', function(req, res){
  res.send('All function called.');
});

//Start listening for requests to the API on port 3030
app.listen(3000);

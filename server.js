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
app.get('/get', getFunction);

//Post request for the homepage
//Can be called with ' curl localhost:3000/post '
app.post('/post' ,postFunction);

//Put request for the homepage
//Can be called with ' curl localhost:3000/put '
app.put('/put', putFunction);

//Delete request for the homepage
//Can be called with ' curl localhost:3000/delete '
app.delete('/delete', deleteFunction);

//The following code allows for input from all the HTTP requests,
// it is a more universal type of method.
//Can be called with ' curl localhost:3000/all '
app.all('/all', allFunction);

//Start listening for requests to the API on port 3030
app.listen(3000);

//Get function
function getFunction(req, res){
  res.send('Get called in separate method.');
};

//Post function
function postFunction(req, req){
  res.send('Post called in separate method.');
}

//Delete function
function deleteFunction(req, res){
  res.send('Delete called in separate method');
}

//Update function
function putFunction(req, res){
  res.send('Put called in a separate method');
}

//All function
function allFunction(req, res){
  res.send('Universal all function called from a separate method.');
}

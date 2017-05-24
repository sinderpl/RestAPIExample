// Server file required for Heroku
// Contains all the basic API HTTP methods
// Written by Alan Niemiec

    //Resources
//Require the HTTP resource
var http = require('http');



http.createServer(function(req, res){
  res.setHeader(200, {'Content-Type' : 'text/html'});
  res.write('Hello World!');
}).listen(3000);

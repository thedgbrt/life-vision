var express = require("express");
var http = require("http");

var app = express();

// serve http response
app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, world!");
});

var server = http.createServer(app).listen(3000);

module.exports = server;

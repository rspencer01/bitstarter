#!/usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) 
{
  fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  response.send(data);
  });
});
app.get('/faq', function(request, response) 
{
  fs.readFile('faq.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  response.send(data);
  });
});
app.get('/progress', function(request, response) 
{
  fs.readFile('progress.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  response.send(data);
  });
});
app.get('/about', function(request, response) 
{
  fs.readFile('about.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  response.send(data);
  });
});
var port = process.env.PORT || 8080;
app.listen(port, function() 
{
  console.log("Listening on " + port);
});

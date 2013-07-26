#!/usr/bin/env node
var sys = require('sys');
var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

http.createServer(function(request,response)
{
  var pth = url.parse(request.url).pathname + '.html';
  sys.puts(pth);
  var full_path = path.join(process.cwd(),pth);
  fs.exists(full_path,function(exists)
  {
    if (!exists)
      full_path = path.join(process.cwd(),'index.html');
    sys.puts(full_path);
    fs.readFile(full_path,"binary",function(err,file)
    {
      if (err)
      {
        response.write("Error 404");
        respones.end();
      }
      else
      {
        response.writeHeader(200);
        response.write(file,"binary");
        response.end();
      }
    });
  });
}).listen(8080);

sys.puts("Listening on 8080");

/*var express = require('express');
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

app.get('/faq', function(request,respons)
{
  
});

var port = process.env.PORT || 8080;
app.listen(port, function() 
{
  console.log("Listening on " + port);
});*/

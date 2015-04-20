//app.js

var http=require('http');
var util = require('util');
var url = require('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Node.js</h1>');
  res.end('<p>Hello World</p>' + util.inspect(url.parse(req.url, true)));
}).listen(80);
console.log('HTTP server is listening at port 80.');


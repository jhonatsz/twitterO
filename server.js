var http = require('http');
var fs = require('fs');
var qs = require('qs');

var html = fs.readFileSync('./index.html');

http.createServer(function (req, res) {

  if (req.method == 'POST') {
    console.log(req);
    // req.pipe(process.stdout);
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // req.pipe(res);
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }

}).listen(5000);

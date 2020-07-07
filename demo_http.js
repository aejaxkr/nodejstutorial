var http = require('http');
http.createServer(function (req, res) {
  res.write('Aejaz Ahmed K R'); 
  res.end(); 
}).listen(8080);
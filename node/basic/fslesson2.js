var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, responce)
{
  console.log("server is start ");
  // synchronously read file
    responce.writeHead(200, { 'content-type': 'text/html' });
    var Filedata = fs.readFileSync('temp.html');
    responce.write(Filedata)
    return responce.end();
})
server.listen(7000);
console.log("server is ready .......");
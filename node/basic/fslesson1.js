var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, responce) {
  console.log("server is start .........");
  // asynchronously file read
  fs.readFile("temp.html", function (error, Filedata) {
    if (error) {
      console.log(error);
    } else {
      responce.writeHead(200, { "content-type": "text/html" });

      responce.write(Filedata);
      return responce.end();
    }
  });
});
server.listen(7000);
console.log("server is ready ........");
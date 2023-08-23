var http = require('http');

var server = http.createServer(function (request, responce) {

    console.log("server is start ....");
    console.log(request.url);
    responce.writeHead(200, { 'content-type': 'application/Json' });
    if (request.url == '/info')
    {
        var data = JSON.stringify({
          name: "viraj",
          age: 18,
          weight: 45.85,
        });
        responce.write(data);

    }
    responce.end();
});
server.listen(7000);
console.log("server is ready .........");
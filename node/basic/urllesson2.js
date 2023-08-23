var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, responce)
{
    //https://127.0.0.1:7000/temp
    console.log("server is start");

    var filename = url.parse(request.url, true);
    console.log(filename.pathname);
    var path = "." + filename.pathname+ ".html";
    console.log(path);
    fs.readFile(path, function (error, data)
    {
        if (error) {
            responce.writeHead(404, { 'content-type': 'text/html' })
            return responce.end(" 404 page not found");
            console.log(error)
        }
        else
            responce.writeHead(200, { 'content-type': 'text/html' });
        responce.write(data);
        console.log("read successfully");
        return responce.end();
            
    })

})
server.listen(7000);
console.log('server is ready to accsept request');
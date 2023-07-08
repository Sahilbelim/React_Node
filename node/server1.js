var http = require('http');
var server = http.createServer(function (request, responce)
{
    console.log("server is start");
    console.log(request.url);
    responce.writeHead(200, { 'content-type': 'text/html' });
    if (request.url == "/")
    {
        responce.write("<html><head></head><body><h1 >home</h1></body></html>");
    }
    else if (request.url == '/aboutus')
    {
        responce.write("<html><head></head><body><h1 aligh='center'>aboutus</h1></body></html>");
        
    }
     else if (request.url == '/contectus')
    {
        responce.write("<html><head></head><body><h1 aligh='center'>contect us</h1></body></html>");
        
    }
    responce.end();
})
server.listen(7000);
console.log(" server1  is ready .... ");
var http = require('http');
var url = require('url');
var server = http.createServer(function (request, responce)
{
    console.log("server is start ");
    //https://127.0.0.1:7000/home.html?userid=1&name=viraj
    var querystring = url.parse(request.url, true);
    console.log(querystring);
    console.log(querystring.path);
    console.log(querystring.pathname);
    console.log(querystring.search);
    console.log(querystring.href);
    console.log(querystring.port);
    var data = (querystring.query);
    console.log(data);
    console.log(data.userid);
    console.log(data.name);

    
    
})
server.listen(7000);
console.log("server is ready to accept request");
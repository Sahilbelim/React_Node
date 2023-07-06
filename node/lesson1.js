var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(" server is ready .............");
})

server.listen(7000);
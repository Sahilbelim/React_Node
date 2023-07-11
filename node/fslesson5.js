var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, responce)
{
  console.log("server is start");
  //data append synchronously
      var filecontent = "\n apple is very testy ";
    fs.appendFileSync('apple.txt', filecontent, 'utf-8');
    console.log("data inserted successfully ");
})
server.listen(7000);
console.log("server is ready ");
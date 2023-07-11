var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, responce)
{
  //data append asynchronously 
  console.log("server is start ");
  var filecontent = "\n banana is very testy ";
  fs.appendFile("banana.txt", filecontent, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("data inserted successflly ");
    }
  });
  return responce.end();
})
server.listen(7000);
console.log("server is ready ");

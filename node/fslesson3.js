var http = require('http');
var fs = require('fs');
var server = http.createServer(function (require, responce)
{
    console.log("server is start ....");

    var Filecontent = "i like an apple and banana both."
    fs.writeFile('banana.txt', Filecontent, function (error)
    {
        if (error)
        {
            console.log(error);
        }
        else
        {
            console.log("data write successfull ");    
        }
        return responce.end();
    })


});
server.listen(7000);
console.log("server is ready .....");
var express = require('express');
var app = express();

app.put('/user', function (requiest, responce)
{
    responce.send("put methode to call url user ");
})
app.delete('/user', function (request, responce)
{
    responce.send("delete methode call to user url");
})
app.listen(7000, (error) => {
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log("server is start .....");
        }
})
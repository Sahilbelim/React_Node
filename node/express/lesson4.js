var express = require('express');
var app = express();

app.get('/user/:id', (requiest, responce) => {
    console.log("id = ", requiest.params.id);
    responce.send("user id = "+ requiest.params.id);
})
app.get('/user/:name/:id', function (request, responce) {
    console.log("name =", request.params.name, "id =", request.params.id);
    responce.send("name =" + request.params.name + "id ="+ request.params.id);
})
app.listen(7000);
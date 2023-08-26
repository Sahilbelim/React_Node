var express = require('express');
var app = express();
const path = require('path');
app.set("view engine", "pug");
app.set("views", "./");
app.use(express.static(path.join(__dirname, 'public')));
app.get('/boostrap', function (request, responce)
{
    responce.render('boostrap');
})
app.listen(7000);
console.log("start...........");

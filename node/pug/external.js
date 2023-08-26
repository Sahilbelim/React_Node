var express = require('express');
var app = express();
app.set("view engine", "pug");
app.set("views", "./");
app.get('/home', function (request, responce) {
    responce.render('home');
});
app.get('/about', function (request, responce) {
    responce.render('about');
});
app.listen(7000)
console.log('start .....');
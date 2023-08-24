var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./');
app.get('/lesson1', function (request, responce) {
    responce.render('lesson1.pug');
});
app.get('/lesson12', function (req, res)
{
    res.render('lesson1.2.pug')
})
app.get("/lesson13", function (req, res) {
  res.render("lesson1.3.pug");
});
app.listen(7000);
console.log("Lesson 1 run .........");
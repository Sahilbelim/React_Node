var express = require("express");
var app = express();
app.set("view engine", "pug");
app.set("views", "./");
app.get('/loop1', function (request, responce) {
    let data = {
            "student": ["sahil", 'param', 'sahal', 'viraj', 'vasu']
        };
    responce.render('lesson3', data);
       
});
app.get('/loop2', function (request, responce) {

    let data = {
        "friends": ['sahil','param', 'sahal', 'viraj', 'vasu']

    }
    responce.render('lesson4', data);
});
app.get('/loop3', function (request, responce)
{
    let data = {
        "student" :{name : 'sahil',age :19,weight:45.36,surname:'belim'}
    }
    responce.render('lesson5', data);
})
app.listen(7000);
console.log('loop start');
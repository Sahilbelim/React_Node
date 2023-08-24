var express = require(express);
var app = express();
app.set("view engine", "pug");
app.set("views", "./");
app.get('/loop1', function (request, responce) {
    let data = {
            "student": ['sahil', 'param', 'sahal', 'viraj', 'vasu']
        };
    responce.render('lesson3', data);
       
});
app.listen(7000);
console.log('loop start');
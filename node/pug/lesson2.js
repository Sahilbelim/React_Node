var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './');
app.get('/contect', function (request, responce)
{
    responce.render("lesson2",
        {
      name: "the easy learn academy",
      number: 8525631445,
        email: "theeasylearnacademy@gmail.com",
    //   address:"eva shurbhi 105 "
    });
});
app.listen(7000);
console.log('lesson2 start .');
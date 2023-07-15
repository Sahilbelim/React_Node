var express = require('express');
var app = express();

app.get('/', function (request, responce) {
    // console.log("/ call... ");
    responce.send("this is home ");

})

app.get("/contectus", function (request, responce) {
//   console.log("/contectus call... ");
  responce.send("this is contectus ");
});
app.get("/aboutus", function (request, responce) {
//   console.log("/aboutus call... ");
  responce.send("this is aboutus ");
});

app.listen(7000);
console.log(" server is ready ...");
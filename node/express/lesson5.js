// use to middeleware 
var express = require('express');
var app = express();

app.use(function (request, responce, next)
{
    // responce.send("first mddelware call");
    console.log("first mddelware call");
    next();
})
app.use(function (req, res, next)
{
    // res.send("second call methode is  %s url is %s ",req.method, req.url);
    console.log("second call methode is  ", req.method, " url is ", req.url);
    next();
})
app.get("/user/:id", (requiest, responce) => {
  console.log("id = ", requiest.params.id);
  responce.send("user id = " + requiest.params.id);
});
app.get("/product/:id", (requiest, responce) => {
  console.log("id = ", requiest.params.id);
  responce.send("user id = " + requiest.params.id);
});
app.listen(7000);
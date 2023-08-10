var connection = require('./connection.js');
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (request, responce)
{
    responce.json({ message: "home page url " });
})
app.get("/custmore", function (request, responce)
{
    var sql = "SELECT * FROM customers ";
    connection.con.query(sql, function (error, result, fields)
    {
        if (error)
        {
            responce.json({Error : error})
        }
        else
        {
            var data = JSON.parse(JSON.stringify(result));
            responce.send(data);
        }
    })
    connection.con.end();
})
app.listen(7000);


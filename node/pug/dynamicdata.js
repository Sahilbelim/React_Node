var express = require('express');
var app = express();
var connection = require('../my_sql/connection');
app.set("view engine", "pug");
app.set("views", "./");
app.get('/products', function (request, responce) {

    var sql = 'SELECT productName,productLine,productDescription, MSRP FROM products';
    connection.con.query(sql, function (error, result, filds)
    {
        if (error)
        {
            console.log(error);
        }
        else
        {
            var data = JSON.parse(JSON.stringify(result));
            console.log(data);
            responce.render('product', { all_data: data });
            // connection.con.end();
        }
    })
});
app.listen(7000);
console.log('start fetch data ');
var express = require('express')
var app = express();
var connection = require('../my_sql/connection')
app.set("view engine", "pug");
app.set("views", "./");
app.get('/home', function (request, responce)
{
     var sql =
        "SELECT productCode,productName,productLine,productDescription, buyPrice FROM products";
    connection.con.query(sql, function (error,result, filds)
    {
        if (error == true)
        {
            console.log(error);
            
        }
        else {
            data = JSON.parse(JSON.stringify(result));
            responce.render('web', { all_data: data })
                 console.log(data[0].productName);
        }
    })
    
})
app.listen(7000);
console.log("start fetch data ");
var connection = require('./connection.js');
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/customers/:id', function (request, responce)
{
    sql = "SELECT * FROM customers WHERE customerNumber=" + request.params.id;
    // console.log(request.params.id);
    connection.con.query(sql, function (error, result, fildes) {
        if (error) {
            responce.json({ error: " error ocurs " });
            console.log(error);
        }
        else {
            var data = JSON.parse(JSON.stringify(result));
            responce.send(data);
        }
    });
    // connection.con.end();
})
app.delete('/customers/:id', function (request, responce)
{
  sql = "DELETE FROM customers WHERE customerNumber =" + request.params.id;
  connection.con.query(sql, function (error, result, fildes) {
    if (error) {
      responce.json({ error: " error ocurs " });
      console.log(error);
    } else {
      responce.json({ message: " data deleted successfully . " });
    }
  });
  // connection.con.end();
})
app.get('/customers/:name/:city', function (request, responce)
{
  var name = request.params.name;
  var city = request.params.city;
  sql = `INSERT INTO customers (customerName,city)  VALUES ('${name}','${city}')`;
  console.log(name, city);
  connection.con.query(sql, function (error, result, fildes) {
    if (error) {
      responce.json({ error: " error ocurs " });
      console.log(error);
    } else {
      responce.json({ message: " data inserted successfully . " });
    }
  });
  // connection.con.end();
})
app.get("/customers/:name/:city/:id", function (request, responce) {
  var name = request.params.name;
    var city = request.params.city;
    var id = request.params.id;
  sql = `UPDATE customers set customerName='${name}',city='${city}' WHERE customerNumber =${id}`;
  console.log(name, city,id);
  connection.con.query(sql, function (error, result, fildes) {
    if (error) {
      responce.json({ error: " error ocurs " });
      console.log(error);
    } else {
      responce.json({ message: " data updated successfully . " });
    }
  });
  // connection.con.end();
});
app.listen(7000);
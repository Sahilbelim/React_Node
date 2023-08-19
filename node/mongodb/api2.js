var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var url = "mongodb://localhost:27017/mydb";

app.get('/student/:name/:age/:fees', function (request, responce) {
    async function Insertdata()
    {
        let db = await MongoClient.connect(url);
        let dbo = db.db("mydb");
        let collection = dbo.collection("student");
        let name = request.params.name;
        let age = request.params.age;
        let fees = request.params.fees;

        let data = {
            'name': name,
            'age': age,
            'fees': fees
        }
        collection.insertOne(data).then(function (error, result) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("data inserted successfully ");
                responce.json({ "message": "data inserted" });
            }
        });
        return 'done';
    }
    Insertdata();
    responce.end();
});
app.listen(7000);
console.log("api 2 start ........");

var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var url = "mongodb://localhost:27017/mydb";
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.post('/student', function (request, responce) {
        
    console.log(request.body);
    async function Inserdata()
    {
        let db = await MongoClient.connect(url);
        console.log('connection successful ');
        let dbo = db.db('mydb');
        let collection = dbo.collection('student');
        let name = request.body.name;
        let age = request.body.age;
        let fees = request.body.fees;

        let data = {
                    "name":name,
                    "age":age,
                    "fees":fees }

        collection.insertOne(data).then(function (error, result)
        {
            if (error==true) {
                console.log(error);
                responce.json({ message: "error" });
            }
            else {
                console.log("data delete successfully ");
                responce.json({ message: "data delete successfully " });
                }
        })

    }
    Inserdata();
})
app.listen(7000);
console.log("api 5 start .........");


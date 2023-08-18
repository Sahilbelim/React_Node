var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var url = "mongodb://localhost:27017/mydb";

app.get('/student', function (request, responce) {
    async function Student()
    {
        var db = await MongoClient.connect(url);
        console.log("connect successfully ");
        var dbo = db.db("mydb");
        var collection = dbo.collection('student');

        collection.find({}).project({}).toArray().then((result) => {
            var data = JSON.parse(JSON.stringify(result));
            responce.send(data);
        });

    }
    Student();
});

app.listen(7000);
console.log("app start ");
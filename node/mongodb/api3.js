var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var url = "mongodb://localhost:27017/mydb";

app.put('/student/:age/:name', function (request, responce) {
    async function Updetedata()
    {
        let db = await MongoClient.connect(url);
        let dbo = db.db("mydb");
        let collection = dbo.collection('student');
        let age = request.params.age;
        let name = request.params.name;
        let search = {
            'name': name
        }
        let data = { $set: { 'age': age } };
        collection.updateMany(search, data).then((error, result) => {
            if (error) {
                console.log(error);
            }
            else {

                console.log("data updeted successfully ");
                responce.json({ "message": "data updeted successfully " });
            }
        });
    }
    Updetedata();
});
app.listen(7000);
console.log("api 3 start .........");
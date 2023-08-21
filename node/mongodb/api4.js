var MongoClient = require("mongodb").MongoClient;
var express = require("express");
var app = express();
var url = "mongodb://localhost:27017/mydb";

app.delete("/student/:name", function (request, responce) {
  async function Deletedata() {
    let db = await MongoClient.connect(url);
    let dbo = db.db("mydb");
    let collection = dbo.collection("student");
   
    let name = request.params.name;
    let search = {
      name: name,
    };
   
    collection.deleteMany(search).then((error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("data delete successfully ");
        responce.json({ message: "data delete successfully " });
      }
    });
  }
  Deletedata();
});
app.listen(7000);
console.log("api 4 start .........");
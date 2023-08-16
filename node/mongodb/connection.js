var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://0.0.0.0:27017/mydb";

async function connectToDatabase() {
    try
    {
    var db = await MongoClient.connect(dburl);
    var dbo = db.db("mydb");
        console.log("Connection successful.")
        
    db.close();
  } 
  catch (error) {
    console.log("Connection failed:", error);
  }
}

connectToDatabase();
console.log("Attempting to establish a connection...");
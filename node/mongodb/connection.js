var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/mydb";
MongoClient.connect(dburl, function (error, db)
{
    if (error)
    {
        console.log(error);
    }    
  
    
        console.log("connection successfull .");
    
    // db.close();
})
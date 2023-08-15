var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/mydb";
MongoClient.connect(dburl, function (error, db)
{
    if (error)
    {
        console.log(error);
    }
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("collection created successfull ");
            }

    })
})
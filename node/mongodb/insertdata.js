var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (error, url)
{
    if (error)
    {
        console.log(error);    
    }
    else
    {
        console.log("connection successflly ");
        var data = {
            name: "viraj", address: "vaghavadi rode bhavnagar  ",
            State:"gujrat"
        }
        dbo = db.db("mydb");
        dbo.collection("student").insertOne(data, function (err, res)
        {
            if (err)
            {
                console.log(err)    
            }
            else
            {
                console.log("data inserted successfully ");    
            }
        })
    }
})
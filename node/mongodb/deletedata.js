var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

async function Deletedata()
{
    try
    {
        var db = await MongoClient.connect(url);
        console.log("Connection successful ");
        var dbo = db.db("mydb");
        var collection = dbo.collection('student');
        var search = { "name": "sahil" };
        await collection.deleteOne(search).then(function (err, result)
        {
            if (err)
            {
                console.log(err);    
            }
            else
            {
                console.log("data deleted successfully ");    
            }
        })
    }
    catch (error)
    {
        console.log(error);
    }
}
Deletedata();
console.log("delete start .");
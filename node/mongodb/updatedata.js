var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

async function Updatedata()
{
    try
    {
        var db = await MongoClient.connect(url);
        console.log("connection successfull ");

        var dbo = db.db("mydb");
        var collection = dbo.collection('student');
        var search = { "name": "patam" };
        var newdata = { $set: { "name": "param", "course": "django" } };

        await collection.updateOne(search, newdata).then(function (err, result)
        {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log("updeta successfully .");    
            }
        })
    }
    catch (error)
    {
        console(error);
    }
}

Updatedata();
console.log("Data updeted successfully ");
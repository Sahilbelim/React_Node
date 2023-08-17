var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

async function Insertdata()
{
    try
    {
        let db = await MongoClient.connect(url);
        console.log("connection successful .");

        let dbo = db.db("mydb");
        let collection = dbo.collection("student");
        let data = { "name": "patam", "course": "react", "fees": 15000 }
        await collection.insertOne(data).then(function (err, result)
        {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log("Data Inserted successfully .");    
            }
        })

    }
    catch (error)
    {
        console.log(error);
    }
}

Insertdata();
console.log("Insert data start ..........");
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://localhost:27017/mydb";

async function createcollection()
{
    try
    {
        let db = await MongoClient.connect(dburl);
        console.log("Connection successfully ");

        let dbo = db.db("mydb");
        // var collection = dbo.collection("teacher");
        await dbo.createCollection('principal').then(function (error, result)
        {
            if (error)
            {
                console.log(error);
                // console.log("error  .");    
            }
            else
            {
                console.log("collection created  successfully .");    
                // console.log(result);    
            }
            // return 'done';
        })

    }
    catch (error)
    {
        console.log(error);
    }
}

createcollection();
console.log("Create collection start . ");
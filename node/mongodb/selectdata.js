const { ObjectId } = require("mongodb");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

async function Selectdata() {
  try {
    var db = await MongoClient.connect(url);
    console.log("Connection successfull .......");
    var dbo = db.db("mydb");
    var collection = dbo.collection("student");
    // ----------------------------------------------------------------new
    await collection
    .find(
        {
            _id: new ObjectId("64dd96a3d08dd76ef3e99c41"),
        },
        {
            projection: { _id: 0 }
        }
        //   {
            //       fees:15000
            //   }
            
            )
            .toArray()
            .then(function (err, result)
            {
                if (err)
                {
                    console.log(err);    
                }
                else
                {
                    console.log(result);    
                }
            });
            // ----------------------------------------------------------------new
  } catch (error) {
    console.log(error);
  }
}
Selectdata();
console.log("select start .........");

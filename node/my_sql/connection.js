var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3308,
    database: "nodejs"
});
connection.connect(function (error)
{
    if(error)
    {
        console.log(error);        
    }
    else
    {
        console.log("connetion successfull .....");    
    }
})

module.exports.con = connection;


var connection = require('./connection.js');
var sql = "DELETE FROM student WHERE id=3";
connection.con.query(sql, function (error, result)
{
    if (error)
        console.log(error)
    else
    {
        console.log("row deleted successfull ");    
        console.log(result);    
        console.log("Number  of rows deleted ",result.affectedRows);    
    }
})
connection.con.end();
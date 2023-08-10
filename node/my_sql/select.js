var connection = require('./connection.js');
var sql = "SELECT customerName , customerNumber FROM customers ";
connection.con.query(sql, function (error, result,fields)
{
    if (error)
    {
        console.log(error);    
    }
    else
    {
        // console.log(result);
        console.log(result.length);
        var size = result.length;
        for (let i = 0; i < size; i++)
        {
            console.log(result[i].customerName);
            // console.log(result[i].customerNumber);
        }
        // console.log(fields);
    }
})
connection.con.end();
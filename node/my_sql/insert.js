var connetion = require('./connection.js')
var sql="INSERT INTO student ( name, surname, gender, weight, age, dob) VALUES ('sahil','belim','m',45.36,19,'2005-05-15')"
connetion.con.query(sql, function (error, result)
{
    if (error)
        console.log(error);
    else
    {
        console.log(result);    
        console.log("student id : ",result.insertId);    
        console.log("student added : ",result.affectedRows);    
    }
})
connetion.con.end();
var connection = require("./connection.js");
var sql = "UPDATE student set dob='2004-12-31', name='vasu' WHERE id=7;";
connection.con.query(sql, function (error, result) {
  if (error) console.log(error);
  else {
    console.log("row updated successfull ");
    console.log(result);
    console.log("Number  of rows updated is  ", result.affectedRows);
  }
});
connection.con.end();

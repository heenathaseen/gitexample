var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "heena",
  password: "atsemicolon",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Delete the "customers" table:
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});

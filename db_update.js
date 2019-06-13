var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "heena",
  password: "atsemicolon",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Update the address field:
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

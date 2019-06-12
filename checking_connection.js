var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "heena",
  password: "atsemicolon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
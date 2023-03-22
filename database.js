var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.3.151",
  port: "3306",
  user: "pcarol",
  password: "root",
  database: "petfind"
});

function getLastLocation() {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM coordinate_log ORDER BY coordinate_id DESC LIMIT 1", function (err, result, fields) {
          if (err) throw err;
          return result;
        });
      });
}

function all() {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM coordinate_log", function (err, result, fields) {
          if (err) throw err;
          return result;
        });
      });
}

module.exports = {
    getLastLocation,
    all
}

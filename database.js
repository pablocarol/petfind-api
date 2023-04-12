const mysql = require('mysql2');

var pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
}).promise();

function getLastLocation() {
  const result = pool.query("SELECT lat, lon FROM coordinate_log ORDER BY coordinate_id DESC LIMIT 1");
  return result;
}

function all() {
  const result = pool.query("SELECT * FROM coordinate_log");
  return result;
}

module.exports = {
  getLastLocation,
  all
}

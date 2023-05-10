const mysql = require('mysql2');

var pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
}).promise();

function getLastLocation() {
  return pool.query("SELECT lat, lon FROM coordinate_log ORDER BY coordinate_id DESC LIMIT 1");
}

function all() {
  return pool.query("SELECT * FROM coordinate_log");
}

function getLocationsByDate(dateIni, dateEnd) {
  return pool.query(`SELECT * FROM coordinate_log WHERE time_stamp >= DATE_FORMAT('${dateIni}', '%Y-%m-%d %H:%i:%s') AND time_stamp <= DATE_FORMAT('${dateEnd}', '%Y-%m-%d %H:%i:%s')`);
}

function getBattery() {
  console.log("aaaa");
  return pool.query("SELECT * FROM battery_status");
}

module.exports = {
  getLastLocation,
  all,
  getLocationsByDate,
  getBattery
}

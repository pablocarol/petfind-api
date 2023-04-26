require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { getLastLocation, all, getLocationsByDate } = require("./controller");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/getAllLocations", all);
app.get("/getLastLocation", getLastLocation);
app.get("/getLocationsByDate", getLocationsByDate);

app.listen(port, () => {
  console.log(`connected to remote database ${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}`);
  console.log(`http://localhost:${port}/`);
});
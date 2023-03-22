require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { getLastLocation, all } = require("./controller");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/locations", all);
app.get("/getLastLocation", getLastLocation);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/locations`);
});
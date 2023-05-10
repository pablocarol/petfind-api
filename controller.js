const db = require("./database.js");

async function all(req, res) {
  try {
    const rows = await db.all();
    const coordinates = rows[0].map((row) => {
      return [row.lon, row.lat]
    });
      res.json(coordinates);
  } catch (ex) {
    res.status(500).json({});
  }
}

async function getLastLocation(req, res) {
  try {
    const rows = await db.getLastLocation();
    const row = rows[0].pop();
    res.json([row.lon, row.lat]);
  } catch (ex) {
    res.status(500).json({});
  }
}

async function getLocationsByDate(req, res) {
  try {
    const rows = await db.getLocationsByDate(req.query.dateIni, req.query.dateEnd);
    const coordinates = rows[0].map((row) => {
        return [row.lon, row.lat]
      });
    res.json(coordinates);
  } catch (ex) {
    res.status(500).json({});
  }
}

async function getBattery(req, res) {
  try {
    const rows = await db.getBattery();
    const row = rows[0].pop();
    res.json(row.percent_charged);
  } catch (ex) {
    res.status(500).json({});
  }
}

module.exports = {
  getLastLocation,
  all,
  getLocationsByDate,
  getBattery
};

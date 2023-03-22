const db = require("./database.js");

async function all(req, res) {
    try {
      const rows = await db.all();
      console.log(rows);
      res.json(rows);
    } catch (ex) {
      res.status(500).json({ error: err });
    }
}

async function getLastLocation (req, res) {
    try {
        const rows = await db.getLastLocation();
        res.json(rows);
    } catch (ex) {
        res.status(500).json({ error: err });
    }
}

module.exports = {
    getLastLocation,
    all
}
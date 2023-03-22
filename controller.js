const db = require("./database.js");

async function all(req, res) {
    try {
        const rows = await db.all();
        res.json(rows[0]);
    } catch (ex) {
        res.status(500).json({});
    }
}

async function getLastLocation(req, res) {
    try {
        const rows = await db.getLastLocation();
        res.json(rows[0]);
    } catch (ex) {
        res.status(500).json({});
    }
}

module.exports = {
    getLastLocation,
    all
}
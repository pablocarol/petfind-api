const db = require("./database.js");

async function all(req, res) {
  try {
    const rows = await db.all();
    const features = rows[0].map((row) => {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [row.lon, row.lat]
          },
          properties: {
            // agregar cualquier propiedad que desees aquí
          }
        };
      });
      const geojsonData = {
        type: 'FeatureCollection',
        features: features
      };
      res.json(geojsonData);
  } catch (ex) {
    res.status(500).json({});
  }
}

async function getLastLocation(req, res) {
  try {
    const rows = await db.getLastLocation();
    const data = rows[0].pop();
    const geojsonData = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [data.lon, data.lat],
          },
          properties: {
            // agregar cualquier propiedad que desees aquí
          },
        },
      ],
    };
    res.json(geojsonData);
  } catch (ex) {
    res.status(500).json({});
  }
}

module.exports = {
  getLastLocation,
  all,
};

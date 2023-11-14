require("dotenv").config();

//   "postgres://postgres:Postgres.2023!!@localhost:5432/meteomonitoring"

const axios = require("axios");
const db = require("./models");
const Monitorings = db.monitoring;

const fetchDataFromAPI = async () => {
  console.log("getting data...");
  try {
    const response = await axios.get(
      "http://197.243.94.20/api/v1/stations/find?startDate=2023-09-18T14:01:18.066Z&endDate=2023-11-07T14:01:18.066Z",
      {
        headers: {
          "x-api-key":
            "fc25c8e2abad33f996c5e4d805b80127fa2e7da8658e2b1b9438df1f576642f3",
        },
      }
    );
    const { data } = response;
    console.log({ data });
    if (data.data.features) {
      const query = data.data.features.map((item) => ({
        stationid: item.properties.stationId,
        stationname: item.properties.stationName,
        date: item.properties.date,
        rain: item.properties.rain,
        shape: {
          type: "Point",
          coordinates: [
            item.geometry.coordinates[1],
            item.geometry.coordinates[0],
          ], // [longitude, latitude]
        },
      }));

      console.log("inserting data....");
      const insert = await Monitorings.bulkCreate(query);
      console.log("inserted " + insert.length + "objects");
    }
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

fetchDataFromAPI();

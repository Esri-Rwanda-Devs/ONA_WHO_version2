require("dotenv").config();
// const db = pgp(
//   "postgres://postgres:Postgres.2023!!@localhost:5432/meteomonitoring"
// );

const axios = require("axios");

const fetchDataFromAPI = async () => {
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
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

fetchDataFromAPI();

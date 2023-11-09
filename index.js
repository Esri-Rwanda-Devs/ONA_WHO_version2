const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:Postgres.2023!!@localhost:5432/meteomonitoring');

const axios = require('axios');

async function fetchDataFromAPI() {
  try {
    const response = await axios.get('http://197.243.94.20/api/v1/stations/find?startDate=2023-09-18T14:01:18.066Z&endDate=2023-11-07T14:01:18.066Z');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    throw error;
  }
}

// async function insertDataIntoDatabase(data) {
//     const query = 'INSERT INTO your_table(geom_column, other_column) VALUES($1, $2)';
    
//     try {
//       // Loop through the data and insert each record
//       for (const record of data) {
//         const result = await db.none(query, [record.geometry, record.otherField]);
//         console.log('Record inserted successfully:', result);
//       }
//     } catch (error) {
//       console.error('Error inserting data into database:', error.message);
//       throw error;
//     }
//   }

//   async function integrateAPIWithDatabase() {
//     try {
//       const apiData = await fetchDataFromAPI();
//       await insertDataIntoDatabase(apiData);
//       console.log('Integration complete.');
//     } catch (error) {
//       console.error('Integration failed:', error.message);
//     } finally {
//       // Close the database connection
//       pgp.end();
//     }
//   }
  
  // Run the integration
  integrateAPIWithDatabase();
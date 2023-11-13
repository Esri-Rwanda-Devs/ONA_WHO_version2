const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "meteomonitoring", //DB_NAME
  "root", //DB_USERNAME,
  "", //DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      timezone: "+02:00",
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.monitoring = require("./monitoring")(sequelize, DataTypes);

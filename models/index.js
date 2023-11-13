const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "meteomonitoring", //DB_NAME
  "root", //DB_USERNAME,
  "", //DB_PASSWORD,
  {
    host: "localhost", //host
    dialect: "mysql", //'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
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

db.sequelize.sync({ force: false }).then(() => {
  console.log("DB re-sync done!");
});

module.exports = db;

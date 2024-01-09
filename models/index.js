const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "who_pro31_1", //DB_NAME
  "data_owner", //DB_USERNAME,
  "gisowner", //DB_PASSWORD,
  {
    host: "esrirw.rw", //host
    dialect: "postgres", //'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
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
db.monitoring = require("./kinshasa")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("DB re-sync done!");
});

module.exports = db;

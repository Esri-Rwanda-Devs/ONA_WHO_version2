const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres", //DB_NAME
  "postgres", //DB_USERNAME,
  "Mandela@44", //DB_PASSWORD,
  {
    host: "localhost", //host
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
// db.Uganda_reg = require("./uganda/uganda_reg")(sequelize, DataTypes);
// db.Uganda_update = require("./uganda/uganda_update")(sequelize, DataTypes);
// db.Uganda_eSRUV = require("./uganda/uganda_eSRUV")(sequelize, DataTypes);
db.kinshasa_enreg = require("./rdc/kinshasa_Enreg")(sequelize, DataTypes);
// db.kinshasa_eSurv = require("./rdc/kinshasa_eSURV")(sequelize, DataTypes);
// db.kinshasa_mise_jour = require("./rdc/kinshasa_Mise_jour")(
//   sequelize,
//   DataTypes
// );
// db.Gabon_covid = require("./gabon/gabon_covid")(sequelize, DataTypes);
// db.Gabon_evaluation = require("./gabon/gabon_evaluation")(sequelize, DataTypes);
// db.Gabon_iprv = require("./gabon/gabon_iprv")(sequelize, DataTypes);
// db.Gabon_supervision = require("./gabon/gabon_supervision")(
//   sequelize,
//   DataTypes
// );

db.sequelize.sync({ force: false }).then(() => {
  console.log("DB re-sync done!");
});

module.exports = db;

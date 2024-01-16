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
db.Uganda_reg = require("./uganda_reg")(sequelize, DataTypes);
db.Uganda_update= require("./uganda_update")(sequelize, DataTypes);
db.Uganda_eSRUV= require("./uganda_eSRUV")(sequelize, DataTypes);
// db.kinshasa= require("./kinshasa")(sequelize, DataTypes);



db.sequelize.sync({ force: false }).then(() => {
  console.log("DB re-sync done!");
});


module.exports = db;

module.exports = (sequelize, DataTypes) => {
  const Monitoring = sequelize.define("monitoring", {
    objectid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stationid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stationname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rain: {
      type: DataTypes.DECIMAL(38, 8),
      allowNull: false,
    },
    shape: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: false,
    },
  });

  return Monitoring;
};

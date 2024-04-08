const { Sequelize } = require("../../app");

module.exports = (sequelize, DataTypes) => {
  const kinshasa = sequelize.define("Kinshasa_Mise a jour Site Existant", {
    objectid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    edited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endtime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deviceid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    xform_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    privilege: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    starttime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attachments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    media_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_media: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    formhub: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submitted_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_modified: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meta_instanceID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submission_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    xform_id_string: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bamboo_dataset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    media_all_received: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DECIMAL(38, 8),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(38, 8),
      allowNull: true,
    },
  });

  return kinshasa;
};

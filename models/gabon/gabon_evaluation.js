const { Sequelize } = require("../../app");

module.exports = (sequelize, DataTypes) => {
  const Gabon = sequelize.define("gabon_evaluation", {
    objectid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
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
    today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
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
    district: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nom_Zone: {
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
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    xform_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    starttime: {
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
    heure_Rapport: {
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
    date_monitored: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    monitored_Level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_Supervisor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nom_Responsable: {
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
    local_Equipe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    media_all_rec: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    waste_Disposal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ref_PCI_Qualifie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materiel_Gestion_Dechets: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stockage_intermediaire: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gestion_Dechets: {
      type: DataTypes.STRING,
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

  return Gabon;
};

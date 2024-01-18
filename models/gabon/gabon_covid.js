const { Sequelize } = require("../../app");

module.exports = (sequelize, DataTypes) => {
  const kinshasa = sequelize.define("gabon_covid", {
    objectid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
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
    nom_zone: {
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    xform_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    starttime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code_equipe: {
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
    rapport_h: {
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
    media_all_rec: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    grave: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mineure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    utilise: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    recues: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    restante: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    utilisee: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_plus_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_plus_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_plus_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_plus_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_femme_autre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_homme_autre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_femme_autre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_homme_autre: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_plus_m_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_plus_m_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_plus_m_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_plus_m_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_moins_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_moins_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_moins_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_moins_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_daff_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_daff_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_affect_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_ffect_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_affect_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_affect_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_affect_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_affect_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_affect_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_affect_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_daff_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_daff_homme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_m_enceintre_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_m_enceintre_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose1_aff_enc_femme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dose2_aff_enc_femme: {
      type: DataTypes.INTEGER,
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

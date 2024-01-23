const { Sequelize } = require("../../app");

module.exports = (sequelize, DataTypes) => {
  const Gabon = sequelize.define("gabon_supervision", {
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
      type: DataTypes.STRING,
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
    num_visit: {
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
    code_equipe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type_equipe: {
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
    tt_case: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yf_cases: {
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
    it_case: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bamboo_dataset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    localisation_equipe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    media_all_rec: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measle_case: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    site_well: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    management_waste: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    next_appointment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    safety_technique: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tally_sheets: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    all_members: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    communication: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vaccines_Conservation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aefi_guidelines: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    materiel_de_vaccination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_doses: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_vaccinated: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_doses_used_var: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_vaccinated_var: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    social_mobilizer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vaccination_registry: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    penta1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    penta3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trained: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hand_sanitizer_gel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dtc_hepb_hib: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wearing_blouse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vaccination_technique: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    social_mobilizer_recruit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dried_vaccines: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adequation_vaccinated: {
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

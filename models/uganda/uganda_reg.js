const { Sequelize } = require("../../app");

module.exports = (sequelize, DataTypes) => {
  const uganda_reg = sequelize.define("uganda_registration", {
    objectid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    _id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _uuid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    states: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _edited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    _status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endtime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    _xform_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    countries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    districts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    new_check: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ownership: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    starttime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    states_calc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _attachments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _media_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    _total_media: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    color_filter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    formhub: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marker_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _submitted_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gps_beginning: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marker_symbol: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_modified: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    countries_calc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    districts_calc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meta_instanceID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _submission_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _xform_id_string: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vaccination_site: {
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
    priority_level_calc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_status_calc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recognized_focal_site: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_of_facility_visited: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type_of_facility_visited: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type_of_facility_visited_calc: {
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
    shape: {
      type: DataTypes.DECIMAL(100, 100),
      allowNull: true,
    },
  });

  return uganda_reg;
};

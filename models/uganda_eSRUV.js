const { Sequelize } = require("../app");

module.exports = (sequelize, DataTypes) => {
  const uganda_eSRUV = sequelize.define("uganda_esruv", {
    
    objectid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    ist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aefi: {
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
    sweep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    today:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _edited:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    _status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deviceid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rew_plan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _xform_id: {
      type: DataTypes.STRING,
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
    func_refrg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gps_ending: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_funding: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_facility: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_training: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _attachments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _media_count: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _total_media: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_temp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    formhub: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    iec_material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _submitted_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    case_def_copy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_visit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gps_beginning: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    percent_fixed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_tally_book: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _date_modified: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    functional_vdc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    monchart_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    num_fixed_plan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_fp_acs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    focal_point_tdr: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meta_instanceID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_registration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_session_plan: {
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
    monitoring_chart: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outreach_planned: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_training_copy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_feed_back: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    defaulter_tracing: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    focal_point_table: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    joint_supervision: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sessionplan_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _bamboo_dataset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    physiotherapy_unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proper_compartment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    supervised_by_dsno: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    _media_all_received: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    session_interrupted: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updated_investforms: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vaccine_ledger_book: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facility_fp_acs_copy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    follow_up_afp_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    met_with_authorities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ri_training_material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surveillancepic_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    valid_afp_cases_found: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temperature_monitoring: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fixed_session_conducted: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    log_of_calls_informants: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    met_consultation_person: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    patient_register_exists: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surveillance_guidelines: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_of_facility_visited: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surveillance_fp_training: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type_of_facility_visited: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vaccine_ledger_available: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outreach_sessions_conducted: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    informant_sensitization_copy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    list_of_community_informants: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surveillance_posters_and_scd: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    visited_community_relay_tradipract: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_unreported_afp_cases_in_the_physiotherapy_unit:{
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

  return uganda_eSRUV;
};
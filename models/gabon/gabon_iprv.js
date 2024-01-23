const { Sequelize } = require("..");

module.exports = (sequelize, DataTypes) => {
  const Monitoring = sequelize.define("gabon_iprv", {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ist: {
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
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    today: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    edited: {
      type: DataTypes.INTEGER,
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
    Nom_Zone: {
      type: DataTypes.INTEGER,
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
    id_Report: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt_Opened: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    yf_Opened: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    starttime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bcg_Opened: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ipv_Opened: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv_Opened: {
      type: DataTypes.INTEGER,
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
    heure_Rapport: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submitted_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt1_pw: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tt2_pw: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt3_pw: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt4_pw: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt5_pw: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measles_Opened: {
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
    tt1_cba: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt2_cba: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tt3_cba: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt4_cba: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt5_cba: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bcg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yf_ge1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    settlement_Type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tt_vials: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    yf_vials: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bcg_ge1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ipv1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    meta_instanceID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Type_Vaccination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    submission_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    xform_id_string: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bcg_vials: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ipv_vials: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    opv_vials: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ipv1_ge1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv_ge1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv2_ge1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv3_ge1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DPTHibHepB_Opened: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minAef1_tt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minAefi_yf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sevAefi_tt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sevAefi_yf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    opv_birth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bamboo_dataset_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minAef1_bcg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minAef1_IPV: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minAef1_OPV: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SevAefi_bcg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sevAefi_IPV: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SevAefi_OPV: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measles_l1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    media_all_received: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measles_GE1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    measles_Vials: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vitaminA1Year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Minaefi_Measles: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sevaefi_Measles: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dpthibhepb1_L1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dpthibhepb2_L1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dpthibhepb3_L1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DPTHibHepB_Vials: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dpthibhepb1_GE1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dpthibhepb2_GE1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Dpthibhepb3_GE1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    VA1YearAndAbove: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    minaefi_DPTHibHepB: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sevaefi_DPTHibHepB: {
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

  return Monitoring;
};

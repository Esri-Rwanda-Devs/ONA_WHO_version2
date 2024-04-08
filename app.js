require("dotenv").config();

// "postgres://postgres:Postgres.2023!!@localhost:5432/meteomonitoring"

const axios = require("axios");
const db = require("./models");
const uganda_reg = db.Uganda_reg;

// const Uganda_update = db.Uganda_update;
// const Uganda_eSRUV = db.Uganda_eSRUV;
// const gabon_covid = db.Gabon_covid;
// const gabon_iprv = db.Gabon_iprv;
// const gabon_evaluation = db.Gabon_evaluation;
// const gabon_supervision = db.Gabon_supervision;
const kinshasa_Enreg = db.kinshasa_enreg;
// const kinshasa_ESURV = db.kinshasa_eSurv;
// const kinshasa_Mise_jour = db.kinshasa_mise_jour;

///////////////////***Kinshasa data *////////////////////////////////
const fetchDataFromAPI_Kinshasa_Enreg = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/10439",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;
    // console.log({ data });

    const query_kinshasa = data.map((item) => ({
      objectid: item._id,
      id: item._id,
      ist: item.ist,
      nom: item.nom,
      name: item.name,
      tags: item._tags.join(","),
      uuid: item._uuid,
      color: item.color,
      email: item.email,
      label: item.label,
      today: item.today,
      wards: item.wards,
      notes: item._notes.join(","),
      states: item.states,
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      deviceid: item.deviceid,
      open_day: item.open_day,
      username: item.username,
      _duration: item._duration,
      _xform_id: item._xform_id,
      countries: item.countries,
      districts: item.districts,
      new_check: item.new_check,
      ownership: item.ownership,
      starttime: item.starttime,
      telephone: item.telephone,
      validator: item.validator,
      wards_calc: item.wards_calc,
      designation: item.designation,
      states_calc: item.states_calc,
      _attachments: item._attachments.join(","),
      _last_edited: item._last_edited,
      _media_count: item._media_count,
      _total_media: item._total_media,
      color_filter: item.color_filter,
      formhub: item["formhub/uuid"],
      marker_color: item["marker-color"],
      _submitted_by: item._submitted_by,
      gps_beginning: item.gps_beginning,
      marker_symbol: item["marker-symbol"],
      review_status: item.review_status,
      _date_modified: item._date_modified,
      countries_calc: item.countries_calc,
      districts_calc: item.districts_calc,
      priority_level: item.priority_level,
      facility_status: item.facility_status,
      meta_instanceID: item["meta/instanceID"],
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      vaccination_site: item.vaccination_site,
      meta_deprecatedID: item["meta/deprecatedID"],
      bamboo_dataset_id: item._bamboo_dataset_id,
      validator_comments: item.validator_comments,
      _media_all_received: item._media_all_received,
      priority_level_calc: item.priority_level_calc,
      facility_status_calc: item.facility_status_calc,
      recognized_focal_site: item.recognized_focal_site,
      name_of_facility_visited: item.name_of_facility_visited,
      type_of_facility_visited: item.type_of_facility_visited,
      type_of_facility_visited_calc: item.type_of_facility_visited_calc,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
      shape: `POINT (${item._geolocation[1]} ${item._geolocation[0]})`,
    }));

    console.log("inserting data....");
    // if (data.length > 0) {
    //   await uganda.delete({});
    // }
    const newList = kinshasa_Enreg.bulkCreate(query_kinshasa);
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};
const fetchDataFromAPI_Kinshasa_eSURV = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/10713",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;
    // console.log({ data });

    const query_kinshasa = data.map((item) => ({
      objectid: item._id,
      id: item._id,
      ist: item.ist,
      nom: item.nom,
      tags: item._tags.join(","),
      uuid: item._uuid,
      email: item.email,
      today: item.today,
      notes: item._notes.join(","),
      prenom: item.prenom,
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      deviceid: item.deviceid,
      district: item.district,
      password: item.password,
      province: item.province,
      username: item.username,
      _duration: item._duration,
      _xform_id: item._xform_id,
      privilege: item.privilege,
      starttime: item.starttime,
      telephone: item.telephone,
      designation: item.designation,
      _attachments: item._attachments.join(","),
      _media_count: item._media_count,
      _total_media: item._total_media,
      formhub: item["formhub/uuid"],
      _submitted_by: item._submitted_by,
      _date_modified: item._date_modified,
      meta_instanceID: item["meta/instanceID"],
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      bamboo_dataset_id: item._bamboo_dataset_id,
      _media_all_received: item._media_all_received,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");
    // if (data.length > 0) {
    //   await uganda.delete({});
    // }
    const newList = kinshasa_ESURV.bulkCreate(query_kinshasa);
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};
const fetchDataFromAPI_Kinshasa_Mise_jour = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/10713",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;
    // console.log({ data });

    const query_kinshasa = data.map((item) => ({
      objectid: item._id,
      id: item._id,
      ist: item.ist,
      nom: item.nom,
      tags: item._tags.join(","),
      uuid: item._uuid,
      email: item.email,
      today: item.today,
      notes: item._notes.join(","),
      prenom: item.prenom,
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      deviceid: item.deviceid,
      district: item.district,
      password: item.password,
      province: item.province,
      username: item.username,
      _duration: item._duration,
      _xform_id: item._xform_id,
      privilege: item.privilege,
      starttime: item.starttime,
      telephone: item.telephone,
      designation: item.designation,
      _attachments: item._attachments.join(","),
      _media_count: item._media_count,
      _total_media: item._total_media,
      formhub: item["formhub/uuid"],
      _submitted_by: item._submitted_by,
      _date_modified: item._date_modified,
      meta_instanceID: item["meta/instanceID"],
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      bamboo_dataset_id: item._bamboo_dataset_id,
      _media_all_received: item._media_all_received,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");
    // if (data.length > 0) {
    //   await uganda.delete({});
    // }
    const newList = kinshasa_Mise_jour.bulkCreate(query_kinshasa);
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

////////////////***Uganda data *///////////////////////////////////
const fetchDataFromAPI_uganda_registration = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/11124",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;
    console.log({ data });

    const query_uganda_regis = data.map((item) => ({
      objectid: item._id,
      _id: item._id,
      ist: item.ist,
      name: item.name,
      _tags: item._tags.join(","),
      _uuid: item._uuid,
      color: item.color,
      label: item.label,
      today: item.today,
      notes: item._notes.join(","),
      region: item.region,
      states: item.states,
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      comments: item.comments,
      _duration: item._duration,
      _xform_id: item._xform_id,
      countries: item.countries,
      districts: item.districts,
      new_check: item.new_check,
      ownership: item.ownership,
      starttime: item.starttime,
      states_calc: item.states_calc,
      _attachments: item._attachments.join(","),
      _media_count: item._media_count,
      _total_media: item._total_media,
      color_filter: item.color_filter,
      formhub: item["formhub/uuid"],
      marker_color: item.marker_color,
      _submitted_by: item._submitted_by,
      _date_modified: item._date_modified,
      countries_calc: item.countries_calc,
      districts_calc: item.districts_calc,
      mete_instanceID: item[`mete-data/instanceID`],
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      gps_beginning: item.gps_beginning,
      marker_symbol: item.marker_symbol,
      _bamboo_dataset_id: item._bamboo_dataset_id,
      priority_level: item.priority_level,
      facility_status: item.facility_status,
      _media_all_received: item._media_all_received,
      priority_level_calc: item.priority_level_calc,
      facility_status_calc: item.facility_status_calc,
      recognized_focal_site: item.recognized_focal_site,
      priority_level_country: itemm.priority_level_country,
      name_of_facility_visited: item.name_of_facility_visited,
      type_of_facility_visited: item.type_of_facility_visited,
      type_of_facility_visited_calc: item.type_of_facility_visited_calc,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
      shape: `POINT (${item._geolocation[1]} ${item._geolocation[0]})`
    }));

    console.log("inserting data....");

    const newList = uganda_reg.bulkCreate(query_uganda_regis);
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error);
  }
};

const fetchDataFromAPI_uganda_update = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/11123",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;
    console.log({ data });

    const query_uganda_update = data.map((item) => ({
      objectid: item._id,
      _id: item._id,
     _ist: item.ist,
      _tags: item._tags.join(","),
      _uuid: item._uuid,
      today: item.today,
      _notes: item._notes.join(","),
      region: item.region,
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      comments: item.comments,
      deviceid: item.deviceid,
      _duration: item._duration,
      _xform_id: item._xform_id,
      countries: item.countries,
      districts: item.districts,
      starttime: item.starttime,
      _attachments: item._attachments.join(","),
      _media_count: item._media_count,
      _total_media: item._total_media,
      formhub: item["formhub/uuid"],
      _submitted_by: item._submitted_by,
      date_modified: item._date_modified,
      districts_calc: item.districts_calc,
      priority_level: item.priority_level,
      facility_status: item.facility_status,
      meta_instanceID: item["meta/instanceID"],
      submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      gps_beginning_up: item.gps_beginning_up,
      _bamboo_dataset_id: item._bamboo_dataset_id,
      facility_status_up: item.facility_status_up,
      _media_all_received: item._media_all_received,
      priority_level_calc: item.priority_level_calc,
      facility_status_calc: item.facility_status_calc,
      list_location: item["list_location/facility"],
      name_of_facility_visited: item.name_of_facility_visited,
      type_of_facility_visited: item.type_of_facility_visited,
      list_location: item["list_location/facility_gps"],
      list_location: item["list_location/states_filter"],
      name_of_facility_visited_up: item.name_of_facility_visited_up,
      type_of_facility_visited_up: item.type_of_facility_visited_up,
      list_location: item["list_location/district_filter"],
      type_of_facility_visited_cal: item.type_of_facility_visited_calc,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");

    const newList = Uganda_update.bulkCreate(query_uganda_update);
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

const fetchDataFromAPI_uganda_eSRUV = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/11125",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;

    const query_uganda_eSRUV = data.map((item) => ({
      objectid: item._id,
      id: item._id,
      ist: item.ist,
      aefi: item.aefi,
      tags: item._tags.join(","),
      uuid: item._uuid,
      sweep: item.sweep,
      today: item.today,
      notes: item._notes.join(","),
      edited: item._edited,
      status: item._status,
      version: item._version,
      duration: item._duration,
      deviceid: item.deviceid,
      rew_plan: item.rew_plan,
      xform_id: item._xform_id,
      countries: item.countries,
      districts: item.districts,
      starttime: item.starttime,
      func_refrg: item.func_refrg,
      gps_ending: item.gps_ending,
      ri_funding: item.ri_funding,
      designation: item.designation,
      ri_facility: item.ri_facility,
      ri_training: item.ri_training,
      attachments: item._attachments.join(","),
      media_count: item._media_count,
      total_media: item._total_media,
      current_temp: item.current_temp,
      formhub: item["formhub/uuid"],
      iec_material: item.iec_material,
      submitted_by: item._submitted_by,
      case_def_copy: item.case_def_copy,
      date_of_visit: item.date_of_visit,
      gps_beginning: item.gps_beginning,
      percent_fixed: item.percent_fixed,
      ri_tally_book: item.ri_tally_book,
      date_modified: item._date_modified,
      functional_vdc: item.functional_vdc,
      monchart_image: item.monchart_image,
      num_fixed_plan: item.num_fixed_plan,
      priority_level: item.priority_level,
      facility_fp_acs: item.facility_fp_acs,
      focal_point_tdr: item.focal_point_tdr,
      meta_instanceID: item["meta/instanceID"],
      ri_registration: item.ri_registration,
      ri_session_plan: item.ri_session_plan,
      submission_time: item._submission_time,
      xform_id_string: item._xform_id_string,
      monitoring_chart: item.monitoring_chart,
      outreach_planned: item.outreach_planned,
      ri_training_copy: item.ri_training_copy,
      current_feed_back: item.current_feed_back,
      defaulter_tracing: item.defaulter_tracing,
      focal_point_table: item.focal_point_table,
      joint_supervision: item.joint_supervision,
      sessionplan_image: item.sessionplan_image,
      bamboo_dataset_id: item._bamboo_dataset_id,
      physiotherapy_unit: item.physiotherapy_unit,
      proper_compartment: item.proper_compartment,
      supervised_by_dsno: item.supervised_by_dsno,
      media_all_received: item._media_all_received,
      session_interrupted: item.session_interrupted,
      updated_investforms: item.updated_investforms,
      vaccine_ledger_book: item.vaccine_ledger_book,
      facility_fp_acs_copy: item.facility_fp_acs_copy,
      follow_up_afp_number: item.follow_up_afp_number,
      met_with_authorities: item.met_with_authorities,
      ri_training_material: item.ri_training_material,
      surveillancepic_image: item.surveillancepic_image,
      valid_afp_cases_found: item.valid_afp_cases_found,
      temperature_monitoring: item.temperature_monitoring,
      fixed_session_conducted: item.fixed_session_conducted,
      log_of_calls_informants: item.log_of_calls_informants,
      met_consultation_person: item.met_consultation_person,
      patient_register_exists: item.patient_register_exists,
      surveillance_guidelines: item.surveillance_guidelines,
      name_of_facility_visited: item.name_of_facility_visited,
      surveillance_fp_training: item.surveillance_fp_training,
      type_of_facility_visited: item.type_of_facility_visited,
      vaccine_ledger_available: item.vaccine_ledger_available,
      outreach_sessions_conducted: item.outreach_sessions_conducted,
      informant_sensitization_copy: item.informant_sensitization_copy,
      list_of_community_informants: item.list_of_community_informants,
      surveillance_posters_and_scd: item.surveillance_posters_and_scd,
      visited_community: item.visited_community_relay_tradipract,
      number_unreported:
        item.number_unreported_afp_cases_in_the_physiotherapy_unit,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");

    const insert = await Uganda_eSRUV.bulkCreate(query_uganda_eSRUV);
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

///////////////////***Gabon */////////////////////////////////////////
// const fetchDataFromAPI_gabon_covid = async () => {
//   console.log("getting data...");

//   try {
//     const response = await axios.get(
//       "https://api.whonghub.org/api/v1/data/10713",
//       {
//         headers: {
//           Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
//         },
//       }
//     );
//     const { data } = response;
//     // console.log({ data });

//     const query_gabon_covid = data.map((item) => ({
//       objectid: item._id,
//       id: item._id,
//       tags: item._tags.join(","),
//       uuid: item._uuid,
//       region: item.Region,
//       notes: item._notes.join(","),
//       country: item.Country,
//       edited: item._edited,
//       status: item._status,
//       endtime: item.endtime,
//       district: item.district,
//       nom_zone: item.Nom_zone,
//       version: item._version,
//       deviceid: item.deviceid,
//       duration: item._duration,
//       xform_id: item._xform_id,
//       starttime: item.starttime,
//       today: item.today,
//       code_equipe: item.code_Equipe,
//       attachments: item._attachments.join(","),
//       media_count: item._media_count,
//       total_media: item._total_media,
//       formhub: item["formhub/uuid"],
//       rapport_h: item.Heure_rapport,
//       submitted_by: item._submitted_by,
//       date_modified: item._date_modified,
//       date_monitored: item.date_monitored,
//       meta_instanceID: item["meta/instanceID"],
//       submission_time: item._submission_time,
//       xform_id_string: item._xform_id_string,
//       bamboo_dataset_id: item._bamboo_dataset_id,
//       media_all_rec: item._media_all_received,
//       grave: item["group4/MAPI_graves"],
//       mineure: item["group4/MAPI_mineures"],
//       utilise: item["group3/Nom_Vaccin_utilise"],
//       recues: item["group3/Nombre_de_doses_recues"],
//       restante: item["group3/Nombre_de_doses_restantes"],
//       utilisee: item["group3/Nombre_de_doses_utilisees"],
//       dose1_femme: item["group1/Dose1_60_et_plus_Pas_daffection_Femmes_PS"],
//       dose1_homme: item["group1/Dose1_60_et_plus_Pas_daffection_Hommes_PS"],
//       dose2_femme: item["group2/Dose2_60_et_plus_Pas_daffection_Femmes_PS"],
//       dose2_homme: item["group2/Dose2_60_et_plus_Pas_daffection_Hommes_PS"],
//       dose1_m_femme: item["group1/Dose1_Moins_de_60_Pas_daffection_Femmes_PS"],
//       dose1_m_homme: item["group1/Dose1_Moins_de_60_Pas_daffection_Hommes_PS"],
//       dose2_m_femme: item["group2/Dose2_Moins_de_60_Pas_daffection_Femmes_PS"],
//       dose2_m_homme: item["group2/Dose2_Moins_de_60_Pas_daffection_Hommes_PS"],
//       dose1_plus_femme:
//         item["group1/Dose1_60_et_plus_Pas_daffection_Femmes_Autres"],
//       dose1_plus_homme:
//         item["group1/Dose1_60_et_plus_Pas_daffection_Hommes_Autres"],
//       dose2_plus_femme:
//         item["group2/Dose2_60_et_plus_Pas_daffection_Femmes_Autres"],
//       dose2_plus_homme:
//         item["group2/Dose2_60_et_plus_Pas_daffection_Hommes_Autres"],
//       dose1_m_femme_autre:
//         item["group1/Dose1_Moins_de_60_Pas_daffection_Femmes_Autres"],
//       dose1_m_homme_autre:
//         item["group1/Dose1_Moins_de_60_Pas_daffection_Hommes_Autres"],
//       dose2_m_femme_autre:
//         item["group2/Dose2_Moins_de_60_Pas_daffection_Femmes_Autres"],
//       dose2_m_homme_autre:
//         item["group2/Dose2_Moins_de_60_Pas_daffection_Hommes_Autres"],
//       dose1_plus_m_femme:
//         item["group1/Dose1_60_et_plus_Au_moins_une_affection_Femmes_PS"],
//       dose1_plus_m_homme:
//         item["group1/Dose1_60_et_plus_Au_moins_une_affection_Femmes_PS"],
//       dose2_plus_m_femme:
//         item["group2/Dose2_60_et_plus_Au_moins_une_affection_Femmes_PS"],
//       dose2_plus_m_homme:
//         item["group2/Dose2_60_et_plus_Au_moins_une_affection_Hommes_PS"],
//       dose1_moins_femme:
//         item["group1/Dose1_Moins_de_60_Au_moins_une_affection_Femmes_PS"],
//       dose1_moins_homme:
//         item["group1/Dose1_Moins_de_60_Au_moins_une_affection_Hommes_PS"],
//       dose2_moins_femme:
//         item["group2/Dose2_Moins_de_60_Au_moins_une_affection_Femmes_PS"],
//       dose2_moins_homme:
//         item["group2/Dose2_Moins_de_60_Au_moins_une_affection_Hommes_PS"],
//       dose1_daff_femme:
//         item["group1/Dose1_Moins_de_60_Pas_daffection_Femmes_enceintes_PS"],
//       dose2_daff_femme:
//         item["group1/Dose1_Moins_de_60_Pas_daffection_Femmes_enceintes_PS"],
//       dose1_affect_femme:
//         item["group1/Dose1_60_et_plus_Au_moins_une_affection_Femmes_Autres"],
//       dose1_ffect_homme:
//         item["group1/Dose1_60_et_plus_Au_moins_une_affection_Hommes_Autres"],
//       dose2_affect_femme:
//         item["group2/Dose2_60_et_plus_Au_moins_une_affection_Femmes_Autres"],
//       dose2_affect_homme:
//         item["group2/Dose2_60_et_plus_Au_moins_une_affection_Hommes_Autres"],
//       dose1_m_affect_femme:
//         item["group1/Dose1_Moins_de_60_Au_moins_une_affection_Femmes_Autres"],
//       dose1_m_affect_homme:
//         item["group1/Dose1_Moins_de_60_Au_moins_une_affection_Hommes_Autres"],
//       dose2_m_affect_femme:
//         item["group2/Dose2_Moins_de_60_Au_moins_une_affection_Femmes_Autres"],
//       dose2_m_affect_homme:
//         item["group2/Dose2_Moins_de_60_Au_moins_une_affection_Hommes_Autres"],
//       dose1_m_daff_femme:
//         item["group1/Dose1_Moins_de_60_Pas_daffection_Femmes_enceintes_Autres"],
//       dose2_m_daff_homme:
//         item["group2/Dose2_Moins_de_60_Pas_daffection_Femmes_enceintes_Autres"],
//       dose1_m_enceintre_femme:
//         item[
//           "group1/Dose1_Moins_de_60_Au_moins_une_affection_Femmes_enceintes_PS"
//         ],
//       dose2_m_enceintre_femme:
//         item[
//           "group2/Dose2_Moins_de_60_Au_moins_une_affection_Femmes_enceintes_PS"
//         ],
//       dose1_aff_enc_femme:
//         item[
//           "group1/Dose1_Moins_de_60_Au_moins_une_affection_Femmes_enceintes_Autres"
//         ],
//       dose2_aff_enc_femme:
//         item[
//           "group2/Dose2_Moins_de_60_Au_moins_une_affection_Femmes_enceintes_Autres"
//         ],
//       latitude: item._geolocation[0],
//       longitude: item._geolocation[1],
//     }));

//     console.log("inserting data....");

//     const newList = gabon_covid.bulkCreate(query_gabon_covid);
//     const insert = await newList;
//     console.log("inserted " + insert.length + "objects");
//   } catch (error) {
//     console.log("Error fetching data from API:", error.message);
//   }
// };
// const getDataFromAPI_gabon_iprv = async () => {
//   console.log("getting data...");

//   try {
//     const response = await axios.get(
//       "https://api.whonghub.org/api/v1/data/9976",
//       {
//         headers: {
//           Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
//         },
//       }
//     );
//     const { data } = response;
//     // console.log({ data });

//     const query = data.map((item) => ({
//       objectid: item._id,
//       id: item._id,
//       ist: item.ist,
//       tags: item._tags.join(","),
//       uuid: item._uuid,
//       color: item.color,
//       today: item.today,
//       Region: item.Region,
//       notes: item._notes.join(","),
//       Country: item.Country,
//       edited: item._edited,
//       status: item._status,
//       endtime: item.endtime,
//       district: item.district,
//       version: item._version,
//       deviceid: item.deviceid,
//       id_Report: item.Id_Report,
//       tt_Opened: item.TT_Opened,
//       yf_Opened: item.YF_Opened,
//       duration: item._duration,
//       starttime: item.starttime,
//       bcg_Opened: item.BCG_Opened,
//       ipv_Opened: item.IPV_Opened,
//       opv_Opened: item.OPV_Opened,
//       code_equipe: item.Code_Equipe,
//       attachments: item._attachments.join(","),
//       media_count: item._media_count,
//       total_media: item._total_media,
//       formhub: item["formhub/uuid"],
//       heure_Rapport: item.Heure_Rapport,
//       submitted_by: item._submitted_by,
//       tt1_pw: item["group2/TT1_PW"],
//       tt2_pw: item["group2/TT2_PW"],
//       tt3_pw: item["group2/TT3_PW"],
//       tt4_pw: item["group2/TT4_PW"],
//       tt5_pw: item["group2/TT5_PW"],
//       yf: item["groupe1/YF_L1"],
//       Measles_Opened: item.Measles_Opened,
//       date_modified: item._date_modified,
//       date_monitored: item.date_monitored,
//       tt1_cba: item["group2/TT1_CBA"],
//       tt2_cba: item["group2/TT2_CBA"],
//       tt3_cba: item["group2/TT3_CBA"],
//       tt4_cba: item["group2/TT4_CBA"],
//       tt5_cba: item["group2/TT2_CBA"],
//       bcg: item["groupe1/BCG_L1"],
//       yf_ge1: item["groupe1/YF_GE1"],
//       Settlement_Type: item.Settlement_Type,
//       tt_vials: item["group3/TT_Vials"],
//       yf_vials: item["group3/YF_Vials"],
//       bcg_ge1: item["groupe1/BCG_GE1"],
//       ipv1: item["groupe1/IPV1_L1"],
//       opv1: item["groupe1/OPV1_L1"],
//       opv2: item["groupe1/OPV2_L1"],
//       opv3: item["groupe1/OPV3_L1"],
//       meta_instanceID: item["meta/instanceID"],
//       Type_Vaccination: item.Type_Vaccination,
//       submission_time: item._submission_time,
//       xform_id_string: item._xform_id_string,
//       bcg_vials: item["group3/BCG_Vials"],
//       ipv_vials: item["group3/IPV_Vials"],
//       opv_vials: item["group3/OPV_Vials"],
//       ipv1_ge1: item["groupe1/IPV1_GE1"],
//       opv1_ge1: item["groupe1/OPV1_GE1"],
//       opv2_ge1: item["groupe1/OPV2_GE1"],
//       opv3_ge1: item["groupe1/OPV3_GE1"],
//       DPTHibHepB_Opened: item.DPTHibHepB_Opened,
//       MinAef1_tt: item["group4/SevAEFI_TT"],
//       MinAefi_yf: item["group4/SevAEFI_YF"],
//       opv_birth: item["groupe1/OPV_Birth"],
//       bamboo_data_id: item._bamboo_dataset_id,
//       MinAefi_ipv: item["group4/MinAEFI_IPV"],
//       SevAefi_bcg: item["group4/SevAEFI_BCG"],
//       SevAef_opv: item["group4/SevAEFI_OPV"],
//       measles_l1: item["groupe1/Measles_L1"],
//       media_all_rec: item._media_all_received,
//       measles_GE1: item["groupe1/Measles_GE1"],
//       measles_Vials: item["group3/Measles_Vials"],
//       vitaminA1Year: item["groupe1/VitaminA1Year"],
//       SevAEFI_Measles: item["group4/SevAEFI_Measles"],
//       Dpthibhepb1_L1: item["groupe1/Dpthibhepb1_L1"],
//       Dpthibhepb2_L1: item["groupe1/Dpthibhepb2_L1"],
//       Dpthibhepb3_L1: item["groupe1/Dpthibhepb3_L1"],
//       DPTHibHepB_Vials: item["group1/DPTHibHepB_Vials"],
//       Dpthibhepb1_GE1: item["groupe1/Dpthibhepb1_GE1"],
//       Dpthibhepb2_GE1: item["groupe1/Dpthibhepb2_GE1"],
//       Dpthibhepb3_GE1: item["groupe1/Dpthibhepb3_GE11"],
//       VA1YearAndAbove: item["groupe1/Dpthibhepb3_L1"],
//       Sevaefi_DPTHibHepB: item["groupe1/VA1YearAndAbove"],
//       Sevaefi_DPTHibHepB: item["group4/SevAEFI_DPTHibHepB"],
//       latitude: item._geolocation[0],
//       longitude: item._geolocation[1],
//     }));

//     console.log("inserting data....");
//     // if (data.length > 0) {
//     //   await Monitorings.delete({});
//     // }
//     const insert = await gabon_iprv.bulkCreate(query);
//     console.log("inserted " + insert.length + "objects");
//   } catch (error) {
//     console.log("Error fetching data from API:", error.message);
//   }
// };

// const fetchDataFromAPI_gabon_evaluation = async () => {
//   console.log("getting data...");

//   try {
//     const response = await axios.get(
//       "https://api.whonghub.org/api/v1/data/9992",
//       {
//         headers: {
//           Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
//         },
//       }
//     );
//     const { data } = response;

//     const query_gabon_evaluation = data.map((item) => ({
//       objectid: item._id,
//       id: item._id,
//       tags: item._tags.join(","),
//       uuid: item._uuid,
//       today: item.today,
//       notes: item._notes.join(","),
//       country: item.country,
//       edited: item._edited,
//       status: item._status,
//       endtime: item.endtime,
//       District: item.District,
//       Nom_Zone: item.Nom_Zone,
//       version: item._version,
//       deviceid: item.deviceid,
//       duration: item._duration,
//       xform_id: item._xform_id,
//       starttime: item.starttime,
//       attachments: item._attachments.join(","),
//       media_count: item._media_count,
//       total_media: item._total_media,
//       formhub: item["formhub/uuid"],
//       heure_Rapport: item.Heure_Rapport,
//       submitted_by: item._submitted_by,
//       date_modified: item._date_modified,
//       date_monitored: item.date_monitored,
//       monitored_Level: item.Monitored_Level,
//       name_Supervisor: item.Name_Supervisor,
//       nom_Responsable: item.Nom_Responsable,
//       meta_instanceID: item["meta/instanceID"],
//       submission_time: item._submission_time,
//       xform_id_string: item._xform_id_string,
//       bamboo_dataset_id: item._bamboo_dataset_id,
//       local_Equipe: item.Localisation_Equipe,
//       media_all_rec: item._media_all_received,
//       waste_Disposal: item["group1/Waste_Disposal"],
//       ref_PCI_Qualifie: item["group1/Ref_PCI_Qualifie"],
//       materiel_Gestion_Dechets: item["group1/Materiel_Gestion_Dechets"],
//       stockage_intermediaire: item["group1/Stockage_intermediaire_DASRI"],
//       gestion_Dechets: item["group1/Gestion_Dechets_Pris_en_charge"],
//       latitude: item._geolocation[0],
//       longitude: item._geolocation[1],
//     }));

//     console.log("inserting data....");
//     const newList = gabon_evaluation.bulkCreate(query_gabon_evaluation);
//     const insert = await newList;
//     console.log("inserted " + insert.length + "objects");
//   } catch (error) {
//     console.log("Error fetching data from API:", error.message);
//   }
// };

// const fetchDataFromAPI_gabon_supervision = async () => {
//   console.log("getting data...");

//   try {
//     const response = await axios.get(
//       "https://api.whonghub.org/api/v1/data/9991",
//       {
//         headers: {
//           Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
//         },
//       }
//     );
//     const { data } = response;
//     // console.log({ data });

//     const query_gabon_supervision = data.map((item) => ({
//       objectid: item._id,
//       id: item._id,
//       tags: item._tags.join(","),
//       uuid: item._uuid,
//       today: item.today,
//       region: item.Region,
//       notes: item._notes.join(","),
//       country: item.Country,
//       edited: item._edited,
//       status: item._status,
//       endtime: item.endtime,
//       district: item.District,
//       nom_zone: item.Nom_Zone,
//       version: item._version,
//       deviceid: item.deviceid,
//       num_visit: item.Num_Visit,
//       duration: item.duration,
//       xform_id: item.xform_id,
//       starttime: item.starttime,
//       code_equipe: item.Code_Equipe,
//       type_equipe: item.Type_Equipe,
//       attachments: item._attachments.join(","),
//       media_count: item._media_count,
//       total_media: item._total_media,
//       formhub: item["formhub/uuid"],
//       heure_rapport: item.Heure_Rapport,
//       submitted_by: item._submitted_by,
//       date_modified: item._date_modified,
//       date_monitored: item._date_monitored,
//       name_supervisor: item.Name_Supervisor,
//       tt_case: item["group1/TT_Cases"],
//       yf_cases: item["group1/YF_Cases"],
//       meta_instanceID: item["meta/instanceID"],
//       submission_time: item._submission_time,
//       xform_id_string: item._xform_id_string,
//       it_case: item["group1/AFP_Cases"],
//       bamboo_dataset_id: item._bamboo_dataset_id,
//       localisation_equipe: item.Localisation_Equipe,
//       media_all_rec: item._media_all_received,
//       measle_case: item["group1/Measles_Cases"],
//       site_well: item["group1/Site_Well_Airy"],
//       management_waste: item["group1/Management_Waste"],
//       next_appointment: item["group1/Next_Appointment"],
//       safety_technique: item["group1/Safety_Technique"],
//       tally_sheets: item["group1/Tally_Sheets_Usage"],
//       all_members: item["group1/All_Members_Presents"],
//       communication: item["group1/Communication_Support"],
//       vaccines_Conservation: item["group1/Vaccines_Conservation"],
//       aefi_guidelines: item["group1/AEFI_Guidelines_Shared"],
//       materiel_de_vaccination: item["group1/Materiel_De_Vaccination"],
//       number_of_doses: item["group1/Number_Of_Doses_Used_JJ"],
//       number_of_vaccinated: item["group1/Number_Of_Vaccinated_JJ"],
//       number_of_doses_used_var: item["group1/Number_Of_Doses_Used_VAR"],
//       number_of_vaccinated_var: item["group1/Number_Of_Vaccinated_VAR"],
//       social_mobilizer: item["group1/Social_Mobilizer_Present"],
//       vaccination_card: item["group1/Vaccination_Card_Delivred"],
//       vaccination_registry: item["group1/Vaccination_Registry_Usage"],
//       penta1: item["group1/Number_Of_Vaccinated_Penta1"],
//       penta3: item["group1/Number_Of_Vaccinated_Penta3"],
//       trained: item["group1/All_Members_Presents_Trained"],
//       hand_sanitizer_gel: item["group1/Availability_Hand_Sanitizer_Gel"],
//       dtc_hepb_hib: item["group1/Number_Of_Doses_Used_DTC-HepB-Hib"],
//       wearing_blouse: item["group1/At_Least_One_Member_Wearing_Blouse"],
//       vaccination_technique: item["group1/Knowledge_Of_Vaccination_Technique"],
//       social_mobilizer_recruit:
//         item["group1/Social_Mobilizer_locally_Recruited"],
//       dried_vaccines: item["group1/Knowledge_Of_Freezed_Dried_Vaccines"],
//       adequation_vaccinated:
//         item["group1/Adequation_Between_Vaccinated_And_Doses_Used"],
//       latitude: item._geolocation[0],
//       longitude: item._geolocation[1],
//     }));

//     console.log("inserting data....");

//     const newList = gabon_supervision.bulkCreate(query_gabon_supervision);
//     const insert = await newList;
//     console.log("inserted " + insert.length + "objects");
//   } catch (error) {
//     console.log("Error fetching data from API:", error);
//   }
// };

////////////////**retrieve datas *///////////////////////////
fetchDataFromAPI_Kinshasa_Enreg();
// fetchDataFromAPI_Kinshasa_Mise_jour();
// fetchDataFromAPI_Kinshasa_eSURV();

// fetchDataFromAPI_gabon_supervision();
// fetchDataFromAPI_gabon_evaluation();
// fetchDataFromAPI_uganda_registration();
// fetchDataFromAPI_uganda_update();
// fetchDataFromAPI_uganda_eSRUV();
// getDataFromAPI_gabon_iprv();
// fetchDataFromAPI_gabon_covid();

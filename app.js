require("dotenv").config();

  // "postgres://postgres:Postgres.2023!!@localhost:5432/meteomonitoring"

const axios = require("axios");
const db = require("./models");
const Uganda_reg = db.Uganda_reg;
const Uganda_update = db.Uganda_update;
const Uganda_eSRUV = db.Uganda_eSRUV;
const kinshasa = db.kinshasa;

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
    // console.log({ data });

    const query_uganda_regis= data.map((item) => ({
      objectid: item._id,
      ist: item.ist,
      name: item.name,
      tags: item._tags.join(","),
      uuid: item._uuid,
      color: item.color,
      label: item.label,
      today: item.today,
      notes: item._notes.join(","),
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
      marker_color: item["marker-color"],
      _submitted_by: item._submitted_by,
      gps_beginning: item.gps_beginning,
      marker_symbol: item["marker-symbol"],
      _date_modified: item._date_modified,
      countries_calc: item.countries_calc,
      districts_calc: item.districts_calc,
      priority_level: item.priority_level,
      facility_status: item.facility_status,
      meta_instanceID: item["meta/instanceID"],
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      vaccination_site: item.vaccination_site,
      bamboo_dataset_id: item._bamboo_dataset_id,
      _media_all_received: item._media_all_received,
      priority_level_calc: item.priority_level_calc,
      facility_status_calc: item.facility_status_calc,
      recognized_focal_site: item.recognized_focal_site,
      priority_level_country: item.priority_level_country,
      name_of_facility_visited: item.name_of_facility_visited,
      type_of_facility_visited: item.type_of_facility_visited,
      type_of_facility_visited_calc: item.type_of_facility_visited_calc,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");
  
    const newList= Uganda_reg.bulkCreate(query_uganda_regis)
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error);
  }
};

fetchDataFromAPI_uganda_registration();


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
    // console.log({ data });

    const query_uganda_update = data.map((item) => ({
      objectid: item._id,
      tags: item._tags.join(","),
      uuid: item._uuid,
      today: item.today,
      notes: item._notes.join(","),
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      comments: item.comments,
      deviceid: item.deviceid,
      _duration: item._duration,
      _xform_id: item._xform_id, 
      starttime: item.starttime,
      _attachments: item._attachments.join(","),
      _media_count: item._media_count,
      _total_media: item._total_media,
      formhub: item["formhub/uuid"],
      _submitted_by: item._submitted_by,
      _date_modified: item._date_modified,
      meta_instanceID: item["meta/instanceID"],
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      gps_beginning_up: item.gps_beginning_up,
      bamboo_dataset_id: item._bamboo_dataset_id,
      facility_status_up: item.facility_status_up,
      _media_all_received: item._media_all_received,
      list_location: item["list_location/states_filter"],
      name_of_facility_visited_up: item.name_of_facility_visited_up,
      type_of_facility_visited_up: item.type_of_facility_visited_up,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");
    // if (data.length > 0) {
    //   await uganda.delete({});
    // }
    const newList= Uganda_update.bulkCreate(query_uganda_update)
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

fetchDataFromAPI_uganda_update();


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
      ist: item.ist,
      aefi: item.aefi,
      tags: item._tags.join(","),
      uuid: item._uuid,
      sweep: item.sweep,
      today: item.today,
      notes: item._notes.join(","),
      _edited: item._edited,
      _status: item._status,
      _version: item._version,
      _duration: item._duration,
      deviceid: item.deviceid,
      rew_plan: item.rew_plan,
      _xform_id: item._xform_id,
      countries: item.countries,
      districts: item.districts,
      new_check: item.new_check,
      ownership: item.ownership,
      starttime: item.starttime,
      func_refrg: item.func_refrg,
      gps_ending: item.gps_ending,
      ri_funding: item.ri_funding,
      designation: item.designation,
      ri_facility: item.ri_facility,
      ri_training: item.ri_training,
      _attachments: item._attachments.join(","),
      _media_count: item._media_count,
      _total_media: item._total_media,
      current_temp: item.current_temp,
      formhub: item["formhub/uuid"],
      iec_material: item.iec_material,
      _submitted_by: item._submitted_by,
      case_def_copy: item.case_def_copy,
      date_of_visit: item.date_of_visit,
      gps_beginning: item.gps_beginning,
      percent_fixed: item.percent_fixed,
      ri_tally_book: item.ri_tally_book,
      _date_modified: item._date_modified,
      functional_vdc: item.functional_vdc,
      monchart_image: item.monchart_image,
      num_fixed_plan: item.num_fixed_plan,
      priority_level: item.priority_level,
      facility_fp_acs: item.facility_fp_acs,
      focal_point_tdr: item.focal_point_tdr,
      meta_instanceID: item["meta/instanceID"],
      ri_registration: item.ri_registration,
      ri_session_plan: item.ri_session_plan,
      _submission_time: item._submission_time,
      _xform_id_string: item._xform_id_string,
      monitoring_chart: item.monitoring_chart,
      outreach_planned: item.outreach_planned,
      ri_training_copy: item.ri_training_copy,
      current_feed_back: item.current_feed_back,
      defaulter_tracing: item.defaulter_tracing,
      focal_point_table: item.focal_point_table,
      joint_supervision: item.joint_supervision,
      sessionplan_image: item.sessionplan_image,
      _bamboo_dataset_id: item._bamboo_dataset_id,
      physiotherapy_unit: item.physiotherapy_unit,
      proper_compartment: item.proper_compartment,
      supervised_by_dsno: item.supervised_by_dsno,
      _media_all_received: item._media_all_received,
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
      visited_community_relay_tradipract: item.visited_community_relay_tradipract,
      number_unreported_afp_cases_in_the_physiotherapy_unit: item.number_unreported_afp_cases_in_the_physiotherapy_unit,
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

fetchDataFromAPI_uganda_eSRUV();

const fetchDataFromAPI_Kinshasa = async () => {
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
    const newList= kinshasa.bulkCreate(query_kinshasa)
    const insert = await newList;
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

// fetchDataFromAPI_Kinshasa();
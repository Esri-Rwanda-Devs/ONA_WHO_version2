require("dotenv").config();

//   "postgres://postgres:Postgres.2023!!@localhost:5432/meteomonitoring"

const axios = require("axios");
const db = require("./models");
const Monitorings = db.monitoring;

const fetchDataFromAPI = async () => {
  console.log("getting data...");

  try {
    const response = await axios.get(
      "https://api.whonghub.org/api/v1/data/11103",
      {
        headers: {
          Authorization: "Basic d2hvYXJjZ2lzOiQkJG9ka2dpcw==",
        },
      }
    );
    const { data } = response;
    console.log({ data });

    const query = data.map((item) => ({
      objectid: item._id,
      ist: item.ist,
      tags: item._tags.join(","),
      uuid: item._uuid,
      color: item.color,
      today: item.today,
      notes: item._notes.join(","),
      wards: item.wards,
      states: item.states,
      _edited: item._edited,
      _status: item._status,
      endtime: item.endtime,
      _version: item._version,
      _duration: item._duration,
      _xform_id: item._xform_id,
      countries: item.countries,
      districts: item.districts,
      new_check: item.new_check,
      ownership: item.ownership,
      startime: item.starttime,
      wards_calc: item.wards_calc,
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
      _bamboo_dataset_id: item._bamboo_dataset_id,
      _media_all_received: item._media_all_received,
      priority_level_calc: item.priority_level_calc,
      facility_status_calc: item.facility_status_calc,
      recognized_focal_site: item.recognized_focal_site,
      name_of_facility_visited: item.name_of_facility_visited,
      type_of_facility_visited: item.type_of_facility_visited,
      type_of_facility_visited_calc: item.type_of_facility_visited_calc,
      latitude: item._geolocation[0],
      longitude: item._geolocation[1],
    }));

    console.log("inserting data....");
    // if (data.length > 0) {
    //   await Monitorings.delete({});
    // }
    const insert = await Monitorings.bulkCreate(query);
    console.log("inserted " + insert.length + "objects");
  } catch (error) {
    console.log("Error fetching data from API:", error.message);
  }
};

fetchDataFromAPI();

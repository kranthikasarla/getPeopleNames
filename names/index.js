const first_name = require("../utilities/utils/index.js");
const name_list = require("../country/state/city/index.js");

const getPeopleInCity = (name_list) => {
  return first_name(name_list);
};
module.exports = getPeopleInCity;

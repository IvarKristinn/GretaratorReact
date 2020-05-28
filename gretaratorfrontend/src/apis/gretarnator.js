import axios from "axios";
// Api call to Gretarator api
// Getting the list of nicknames
export default axios.create({
  baseURL: "http://gretarnator-api.herokuapp.com"
});
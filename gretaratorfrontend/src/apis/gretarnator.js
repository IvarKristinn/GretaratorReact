import axios from "axios";
// Api call to Gretarator api
// Getting the list of nicknames
export default axios.create({
  baseURL: "http://gretarator.com"
});

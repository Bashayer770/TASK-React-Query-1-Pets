import axios from "axios";

function list() {
  return axios.get("https://pets-react-query-backen.herokuapp.com/pets");
}

export default list;

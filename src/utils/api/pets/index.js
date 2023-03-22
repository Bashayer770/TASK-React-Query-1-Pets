import axios from "axios";
const URL = "http://localhost:8000";
function list() {
  return axios.get(`${URL}/pets`);
}

export function adopt(id) {
  return axios.put(`${URL}/pets/${id}`, { adopted: true });
}

export default list;

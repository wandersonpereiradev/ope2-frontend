import axios from "axios";

const api = axios.create({
  baseURL: "https://ope2-backend.herokuapp.com/sistema/",
});


export default api;
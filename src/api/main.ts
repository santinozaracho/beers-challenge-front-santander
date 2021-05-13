import axios from "axios";
// this is an example for main api implementation with axios
const mainApi = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API_URL,
});

mainApi.defaults.headers.common["Content-Type"] = "application/json";
mainApi.defaults.headers.common.Accept = "application/json";

export { mainApi };

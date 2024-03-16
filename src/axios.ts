import axios from "axios";
// create instance for axios with default config and export it as default http://localhost:3000/
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
export default api;

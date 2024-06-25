import axios from "axios";
// create instance for axios with default config and export it as default http://localhost:3000/
export const api = axios.create({
  baseURL: "http://localhost:3200/api",
});
export default api;


export const ContentApi = axios.create({
  baseURL: "http://localhost:5555/api",
});

ContentApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
})

ContentApi.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return Promise.reject(error);
})


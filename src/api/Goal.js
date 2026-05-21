import axios from "axios";

const goalApi = axios.create({
  baseURL: "http://localhost:8080/api || https://fitness-tracker-b-git-main-waleed-rasheeds-projects.vercel.app/",
});

goalApi.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default goalApi;
import axios from "axios";

const goalApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

goalApi.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default goalApi;
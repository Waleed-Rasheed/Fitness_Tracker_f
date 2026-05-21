import axios from "axios";

const nutritionApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

nutritionApi.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default nutritionApi;
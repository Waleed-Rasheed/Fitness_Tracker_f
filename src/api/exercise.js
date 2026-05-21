import axios from "axios";

const exerciseApi = axios.create({
    baseURL: "http://localhost:8080/api"
});
exerciseApi.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default exerciseApi;
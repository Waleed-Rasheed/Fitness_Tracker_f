import axios from "axios";

const categoryApi = axios.create({
    baseURL: "http://localhost:8080/api"
});
categoryApi.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default categoryApi;
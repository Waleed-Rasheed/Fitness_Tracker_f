import axios from "axios";

const profileApi = axios.create({
    baseURL: "http://localhost:8080/api || https://fitness-tracker-b-git-main-waleed-rasheeds-projects.vercel.app/"
});

profileApi.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default profileApi;
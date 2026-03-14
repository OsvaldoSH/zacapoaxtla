import axios from "axios";
import { obtenerToken } from "../utils/auth";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use(
    (config) => {
        const token = obtenerToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
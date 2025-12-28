import axios from "axios";

// inicio de la api que llamara al back
const lermnsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

// Interceptores

lermnsApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { lermnsApi };
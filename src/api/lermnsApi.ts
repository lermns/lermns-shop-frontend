import axios from "axios";

// inicio de la api que llamara al back
const lermnsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

// TODO: crear interceptores


export { lermnsApi };
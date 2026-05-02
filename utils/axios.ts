import axios from "axios";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(backend_url);

const axiosInstance = axios.create({
  baseURL: backend_url,
  withCredentials: true,
});

export default axiosInstance;

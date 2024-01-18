/** axios instance with secret  */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_SECRET}`,
    'Content-Type': 'application/json', 
  },
});

export default axiosInstance;
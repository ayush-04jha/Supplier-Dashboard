import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://supplier-dashboard-backend.onrender.com/api',
});

export default axiosInstance;

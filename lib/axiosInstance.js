import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  withCredentials: true,
});

export default axiosInstance;

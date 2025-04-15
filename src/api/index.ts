// src/index.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.123.150:8000',
  timeout: 5000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api

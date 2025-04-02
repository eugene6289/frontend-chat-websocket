// src/api.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.123.150:8000',
  timeout: 5000,
})

export default api

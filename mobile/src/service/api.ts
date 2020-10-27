import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
  // http://192.168.15.17:3333
});

export default api;
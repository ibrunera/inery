import axios from 'axios';

const api = axios.create({
  //isso aqui pode estar errado
  baseURL: 'http://190.60.10:3333',
});

export default api;
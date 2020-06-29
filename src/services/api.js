import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://app-tireitu.herokuapp.com/',
  baseURL: 'http://192.168.30.8:3133',
});

export default api;

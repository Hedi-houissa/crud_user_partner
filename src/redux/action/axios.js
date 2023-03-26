import axios from 'axios';

// change default path
const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default instance;

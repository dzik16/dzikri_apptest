import axios from 'axios';
import config from '../../config';

const instance = axios.create({
  baseURL: config.backendApi,
  timeout: 1000,
});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => response,
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;

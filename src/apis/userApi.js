import axios from 'axios';

axios.defaults.baseURL = `http://localhost:8000`;

export const LoginApi = (params) => axios.post(`/login`,params);
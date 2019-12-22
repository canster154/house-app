import axios from 'axios';

axios.defaults.baseURL = `http://localhost:8000`;

// 登录接口
export const LoginApi = (params) => axios.post(`/login`,params);

// 获取房产列表接口
export const HouseListApi = () => axios.get('/getHouseList');
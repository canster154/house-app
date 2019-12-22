import axios from 'axios';
var request = axios.create({
  baseURL:"/mz",
  timeout:5000
})

request.interceptors.request.use((config) => {
  config.headers["X-Client-Info"] = `{"a":"3000","ch":"1002","v":"5.0.4","e":"15769333736283537154281"}`;
  if(config.data["X-Host"]) {
    config.headers["X-Host"] = config.data["X-Host"];
  }
  return config;
})

request.interceptors.response.use((res) => {
  return res;
})

export default request;
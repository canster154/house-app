import axios from 'axios';

// 拦截请求，追加token
axios.interceptors.request.use(req => {
  const token = localStorage.getItem('token');
  if(token){
    req.headers.token = token; 
  };
  return req;  
});

// 拦截相应，截取data字段
axios.interceptors.response.use(res =>{
  return res.data;
})
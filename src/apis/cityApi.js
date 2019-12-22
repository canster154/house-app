import request from './request';

// 获取城市列表
export const CitiesList = () => {
  return request.get('/gateway?k=' + Date.now(), {
    data: {
      "X-Host":"mall.film-ticket.city.list"
    }
  })
};
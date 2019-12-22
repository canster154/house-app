import {createStore} from 'redux';

const store = createStore(reducer);

function reducer(state={
  historyList:[],
  city:'定位中...'
},action){
  switch(action.type){
    // 添加历史列表
    case 'addHistory':
      state.historyList.forEach((item,index)=>{
        if(item.id === action.item.id){
          state.historyList.splice(index,1);
        }
      })
      return {...state,historyList:[action.item,...state.historyList]}
    // 选择城市
    case 'checkCity':
      return {...state,city:action.city}
    default: return state;
  }
};

export const addHistory = (item) => {
  return {
    type:'addHistory',item
  }
};

export const checkCity = (city) =>{
  return {
    type: 'checkCity', city
  }
};

export default store;
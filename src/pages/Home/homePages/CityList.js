import React from 'react';
import {Flex} from 'antd-mobile';
import BScroll from 'better-scroll';
// 引入react-redux插件
import {connect} from 'react-redux';
import {checkCity} from '../../../utils/store';

// 引入在线城市接口
import {CitiesList} from '../../../apis/cityApi';

const {hotcity,citys} = require('../../../config/cities');


class CityList extends React.Component{
  componentDidMount(){
    const cityEl = document.getElementById('cityList');
    this.cityScroll = new BScroll(cityEl,{click:true});

    // 获取在线接口
    CitiesList().then(res=>{
      this.lists = res.data.data.cities
      console.log('res--------',this.lists)
    }).catch(err=>{
      console.log('err----------',err);
    })
  };
  // 点击跳转
  scrollTo = (id) => {
    const el = document.getElementById(id);
    this.cityScroll.scrollToElement(el,500)
  };
  // 选择城市
  checkCity = (city) => {
    this.props.dispatch(checkCity(city));
    this.props.history.goBack();
  };
  render(){
    return (
      <div>
        {/* 左侧城市列表 */}
        <div id="cityList" style={{background:'#fff',padding:6,position:'fixed',top:0,bottom:0,left:0,right:0,overflow:'auto'}}>
          <div>
            <p style={{padding:'6px 0',}}>热门城市</p>
            {
              hotcity.map((item,key)=>{
                return (
                  <p key={key} onClick={()=>this.checkCity(item)} style={{padding:'6px 0',borderBottom:'1px solid #eee'}}>{item}</p>
                )
              })
            }
            {
              citys.map((item,key)=>{
                return (
                  <div key={key}>
                    <p id={item.title} style={{padding:'6px 0',}}>{item.title}</p>
                    {
                      item.lists.map((city,k)=>{
                        return (
                          <p key={k} onClick={()=>this.checkCity(city)} style={{padding:'6px 0',borderBottom:'1px solid #eee'}}>{city}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* 右侧字母索引 */}
        <Flex direction="column" justify="center" style={{width:40,position:'fixed',top:0,bottom:0,right:0,textAlign:'center',background:'#fff'}}>
          {
            citys.map((item,key)=>{
              return(
                <p key={key} style={{padding:'5px 0'}} onClick={()=>this.scrollTo(item.title)}>{item.title}</p>
              )
            })
          }
        </Flex>
      </div>
    )
  }
}

export default connect()(CityList);
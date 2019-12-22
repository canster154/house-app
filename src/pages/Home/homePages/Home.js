import React from 'react';
import { Flex, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
// 引入房产列表项组件
import HouseItem from '../../../components/HouseItem';
// 引入房产列表api
import {HouseListApi} from '../../../apis/userApi';
// 引入react-redux插件
import {connect} from 'react-redux';
import {addHistory, checkCity} from '../../../utils/store';

class Home extends React.Component {
  state = {
    // 轮播图
    data: [1, 2, 3, 4],
    // 导航菜单
    nav: [
      { icon: 'nav1.png', text: '新房', bg:'#0af' },
      { icon: 'nav1.png', text: '二手房', bg:'#a40' },
      { icon: 'nav1.png', text: '租房', bg:'#578' },
      { icon: 'nav1.png', text: '商铺写字楼', bg:'#0ff' },
      { icon: 'nav1.png', text: '买房', bg:'#00f' },
      { icon: 'nav1.png', text: '海外资产', bg:'#f0f' },
      { icon: 'nav1.png', text: '小区房价', bg:'#4de' },
      { icon: 'nav1.png', text: '问答', bg:'#893' },
    ],
    // 房产列表
    houseList:[]
  };

  // 定位
  componentDidMount() {
    // 获取房产列表
    HouseListApi().then(res=>{
      this.setState({houseList:res.data});
    }).catch(err=>{
      console.log(err);
    })

    // 地图接口
    if(!window.AMap || this.props.city != '定位中...'){return false;}
    window.AMap.plugin('AMap.CitySearch', () => {
      var citySearch = new window.AMap.CitySearch()
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          // 调用方法修改redux的store仓库，改变到定位的城市
          this.props.dispatch(checkCity(result.city));
        }
      })
    })
  }

  // 跳转到城市列表
  toCityList = () => {
    this.props.history.push('/citylist');
  };
  // 跳转到搜索页
  toSearchPage = () => {
    this.props.history.push('/search');
  };
  // 跳转到详情页
  toHouseDetail = (item) => {
    this.props.history.push({pathname:'/detail',query:{item}});
    // 添加到历史记录
    this.props.dispatch(addHistory(item));
  };
  render() {
    return (
      <div>
        {/* 头部定位和搜索框 */}
        <Flex style={{ color: '#fff', background: '#0af', padding: '4px 0' }} align="center">
          <Flex style={{ padding: '0 10px', fontSize: 12 }} onClick={this.toCityList}>{this.props.city} ▼</Flex>
          <Flex style={{ background: '#fff', borderRadius: 20, color: '#aaa', flex: 1, lineHeight: 1.8 }}
            onClick={this.toSearchPage}
          >
            <span className="iconfont" style={{ padding: '0 6px' }}>&#xe696;</span>
            <span>挑好房，上京东</span>
          </Flex>
          <Flex style={{ padding: '0 10px' }}><span className="iconfont" style={{ fontSize: 30 }}>&#xe884;</span></Flex>
        </Flex>

        {/* 轮播图 */}
        <Carousel
          autoplay={1}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: 150 }}>
              <img
                src={`${require('../../../assets/images/banner' + val + '.jpg')}`}
                style={{ width: '100%', verticalAlign: 'top' }} />
            </a>
          ))}
        </Carousel>

        {/* 子菜单 */}
        <div style={{display:'flex',flexWrap:'wrap',marginTop:6}}>
          {
            this.state.nav.map(item=>{
              return (
                <div style={{width:'25%',textAlign:'center'}} key={item.text}>
                  <p style={{background:item.bg,borderRadius:'50%',width:54,height:54,margin:'4px auto'}}>
                    <img src={require('../../../assets/images/'+item.icon)} style={{width:'100%',marginTop:5}}/>
                  </p>
                  <span style={{color:'#555'}}>{item.text}</span>
                </div>
              )
            })
          }
        </div>
        <WhiteSpace style={{background:'#eee',marginTop:6}}/>

        {/* 房产全百科 */}
        <WingBlank>
          <div style={{color:'#888'}}>
            <Flex align='baseline'>
              <h3 style={{color:'#0a4',marginRight:4}}>房产全百科</h3>
              <p>专业的买房攻略</p>
            </Flex>
            <Flex justify="between">
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:34}}>&#xe609;</span>
                  <p>我要贷款</p>
                </Flex>
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:34}}>&#xe60a;</span>
                  <p>房贷计算</p>
                </Flex>
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:34}}>&#xe679;</span>
                  <p>知识</p>
                </Flex>
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:34}}>&#xe651;</span>
                  <p>扫一扫</p>
                </Flex>
            </Flex>
          </div>
        </WingBlank>
        <WhiteSpace style={{background:'#eee',marginTop:10}}/>

        {/* 猜你喜欢，房产列表 */}
        <WingBlank>
          <p style={{padding:5,fontSize:16}}>猜你喜欢</p>
          {
            this.state.houseList.map((item,key)=>{
              return (
                <HouseItem item={item} key={key} toDetail={()=>this.toHouseDetail(item)}/>
              )
            })
          }
        </WingBlank>
      </div>
    )
  }
};

const mapStateToProps = (state) =>{
  return {city:state.city}
}

export default connect(mapStateToProps)(withRouter(Home));
import React from 'react';
import { Flex, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  state = {
    city: '定位中...',
    // 轮播图
    data: [1, 2, 3, 4],
    nav: [
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '新房', bg:'#0af' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '二手房', bg:'#a40' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '租房', bg:'#578' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '商铺写字楼', bg:'#0ff' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '买房', bg:'#00f' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '海外资产', bg:'#f0f' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '小区房价', bg:'#4de' },
      { icon: `${require('../../../assets/images/nav1.png')}`, text: '问答', bg:'#893' },
    ]
  };

  // 定位
  componentDidMount() {
    window.AMap.plugin('AMap.CitySearch', () => {
      var citySearch = new window.AMap.CitySearch()
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          this.setState({ city: result.city });
        }
      })
    })
  }

  toCityList = () => {
    this.props.history.push('/citylist');
  };
  toSearchPage = () => {
    this.props.history.push('/search');
  };
  render() {
    return (
      <div>
        <Flex style={{ color: '#fff', background: '#0a4', padding: '4px 0' }} align="center">
          <Flex style={{ padding: '0 10px', fontSize: 12 }} onClick={this.toCityList}>{this.state.city} ▼</Flex>
          <Flex style={{ background: '#fff', borderRadius: 20, color: '#aaa', flex: 1, lineHeight: 1.8 }}
            onClick={this.toSearchPage}
          >
            <span className="iconfont" style={{ padding: '0 6px' }}>&#xe696;</span>
            <span>挑好房，上京东</span>
          </Flex>
          <Flex style={{ padding: '0 10px' }}><span className="iconfont" style={{ fontSize: 30 }}>&#xe884;</span></Flex>
        </Flex>
        <Carousel
          autoplay={1}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: 160 }}>
              <img
                src={`${require('../../../assets/images/banner' + val + '.jpg')}`}
                style={{ width: '100%', verticalAlign: 'top' }} />
            </a>
          ))}
        </Carousel>
        <div style={{display:'flex',flexWrap:'wrap',marginTop:6}}>
          {
            this.state.nav.map(item=>{
              return (
                <div style={{width:'25%',textAlign:'center'}}>
                  <p style={{background:item.bg,borderRadius:'50%',width:60,height:60,margin:'4px auto'}}>
                    <img src={item.icon} style={{width:60,marginTop:5}}/>
                  </p>
                  <span style={{color:'#555'}}>{item.text}</span>
                </div>
              )
            })
          }
        </div>
        <WhiteSpace style={{background:'#eee',marginTop:6}}/>
        <WingBlank>
          <div style={{color:'#888'}}>
            <Flex align='baseline'>
              <h3 style={{color:'#0a4',marginRight:4}}>房产全百科</h3>
              <p>专业的买房攻略</p>
            </Flex>
            <Flex justify="between">
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:40}}>&#xe609;</span>
                  <p>我要贷款</p>
                </Flex>
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:40}}>&#xe60a;</span>
                  <p>房贷计算</p>
                </Flex>
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:40}}>&#xe679;</span>
                  <p>知识</p>
                </Flex>
                <Flex direction="column" align="center">
                  <span className="iconfont" style={{fontSize:40}}>&#xe651;</span>
                  <p>扫一扫</p>
                </Flex>
            </Flex>
          </div>
        </WingBlank>
        <WhiteSpace style={{background:'#eee',marginTop:10}}/>
        <WingBlank>
          <p style={{padding:5,fontSize:16}}>猜你喜欢</p>
          <Flex style={{padding:'5px 0'}} align="start">
            <img src={require('../../../assets/images/pdt1.png')} width="100"/>
            <div style={{marginLeft:6,flex:1}}>
              <Flex justify="between">
                <h2 style={{margin:0}}>绿地尊天府</h2>
                <h3 style={{margin:0,color:'#f00'}}>19000/平</h3>
              </Flex>
              <p style={{margin:'6px 0',color:'#aaa'}}>锦江区 东客站</p>
              <p style={{color:'#aaa'}}>4室2厅 200平</p>
            </div>
          </Flex>
          <Flex style={{padding:'5px 0'}} align="start">
            <img src={require('../../../assets/images/pdt1.png')} width="100"/>
            <div style={{marginLeft:6,flex:1}}>
              <Flex justify="between">
                <h2 style={{margin:0}}>绿地尊天府</h2>
                <h3 style={{margin:0,color:'#f00'}}>19000/平</h3>
              </Flex>
              <p style={{margin:'6px 0',color:'#aaa'}}>锦江区 东客站</p>
              <p style={{color:'#aaa'}}>4室2厅 200平</p>
            </div>
          </Flex>
          <Flex style={{padding:'5px 0'}} align="start">
            <img src={require('../../../assets/images/pdt1.png')} width="100"/>
            <div style={{marginLeft:6,flex:1}}>
              <Flex justify="between">
                <h2 style={{margin:0}}>绿地尊天府</h2>
                <h3 style={{margin:0,color:'#f00'}}>19000/平</h3>
              </Flex>
              <p style={{margin:'6px 0',color:'#aaa'}}>锦江区 东客站</p>
              <p style={{color:'#aaa'}}>4室2厅 200平</p>
            </div>
          </Flex>
          <Flex style={{padding:'5px 0'}} align="start">
            <img src={require('../../../assets/images/pdt1.png')} width="100"/>
            <div style={{marginLeft:6,flex:1}}>
              <Flex justify="between">
                <h2 style={{margin:0}}>绿地尊天府</h2>
                <h3 style={{margin:0,color:'#f00'}}>19000/平</h3>
              </Flex>
              <p style={{margin:'6px 0',color:'#aaa'}}>锦江区 东客站</p>
              <p style={{color:'#aaa'}}>4室2厅 200平</p>
            </div>
          </Flex>
        </WingBlank>
      </div>
    )
  }
};

export default withRouter(Home);
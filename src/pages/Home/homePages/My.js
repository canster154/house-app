import React from 'react';
import {Flex,WhiteSpace} from 'antd-mobile';

export default class Chat extends React.Component{
  state = {
    funcList:[
      {id:0,icon:'\ue60c',title:'我的积分'},
      {id:1,icon:'\ue74d',title:'我的订阅'},
      {id:2,icon:'\ue622',title:'微聊联系人'},
      {id:-1},
      {id:3,icon:'\ue60a',title:'房贷计算器'},
      {id:4,icon:'\ue62b',title:'我的房子'},
      {id:-2},
      {id:5,icon:'\ue618',title:'看房记录'},
      {id:6,icon:'\ue67d',title:'我的问答'},
      {id:-3},
      {id:7,icon:'\ue771',title:'设置'},
      {id:8,icon:'\ue708',title:'意见反馈'},
    ]
  };
  render(){
    return (
      <div>
        {/* 头部 */}
        <div style={{background:'#0af',color:'#fff'}}>
          <Flex>
            <img src={require('../../../assets/images/nav1.png')} width='120'/>
            <div style={{flex:1}}>
              <Flex style={{fontSize:18,paddingRight:15}} justify="between">
                <div>
                  <a href="#/login" style={{color:'#fff'}}>登录</a>/ <a href="" style={{color:'#fff'}}>注册</a>
                  <p style={{fontSize:14,marginTop:8}}>可以与经纪人发起聊天</p>
                </div>
                <span className="iconfont">&#xe771;</span>
              </Flex>
            </div>
          </Flex>
          <Flex style={{fontSize:16,padding:'10px 0'}} justify="around">
            <Flex direction="column" style={{flex:1,borderRight:'1px solid #fff'}}>
              <p style={{padding:6}}>0</p>
              <Flex style={{padding:6}} align="center">
                <span className="iconfont" style={{fontSize:24,marginRight:6}}>&#xe605;</span>
                <span>钱包</span>
              </Flex>
            </Flex>
            <Flex direction="column" style={{flex:1,borderRight:'1px solid #fff'}}>
              <p style={{padding:6}}>0</p>
              <Flex style={{padding:6}} align="center">
                <span className="iconfont" style={{fontSize:24,marginRight:6}}>&#xe606;</span>
                <span>优惠</span>
              </Flex>
            </Flex>
            <Flex direction="column" style={{flex:1}}>
              <p style={{padding:6}}>0</p>
              <Flex style={{padding:6}} align="center">
                <span className="iconfont" style={{fontSize:24,marginRight:6}}>&#xe60c;</span>
                <span>积分</span>
              </Flex>
            </Flex>
          </Flex>
        </div>

        {/* 功能区 */}
        {
          this.state.funcList.map((item,key)=>{
            if(!item.icon){
              return (<div key={item.id} style={{height:6,background:'#eee'}}></div>)
            }
            return(
              <Flex key={item.title} style={{borderBottom:'1px solid #ccc',padding:'12px'}} justify="between">
                <Flex>
                  <span className="iconfont" style={{marginRight:5}}>{item.icon}</span>
                  <span>{item.title}</span>
                </Flex>
                <span> > </span>
              </Flex>
            )
          })
        }
        
      </div>
    )
  }
}
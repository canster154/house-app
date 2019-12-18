import React from 'react';
import { Flex, Button } from 'antd-mobile';

export default class Chat extends React.Component{
  render(){
    return (
      <div style={{width:'100%',height:'100%',fontSize:18,background:'#eee',paddingTop:150}}>
        <Flex direction="column" style={{background:'#fff',width:'80%',margin:'0 auto',paddingBottom:20,borderRadius:5}}>
          <img src={require('../../../assets/images/nav1.png')}/>
          <p style={{padding:'4px 0'}}>置业顾问：<span>张小妹</span></p>
          <p style={{padding:'10px 0'}}>专业服务诚信做人诚心做事！</p>
          <Button type="primary" style={{width:100}}>我要聊天</Button>
        </Flex>
      </div>
    )
  }
}
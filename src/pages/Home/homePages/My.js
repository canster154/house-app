import React from 'react';
import {Flex} from 'antd-mobile';

export default class Chat extends React.Component{
  render(){
    return (
      <div>
        <div style={{background:'#0af',color:'#fff'}}>
          <Flex>
            <img src={require('../../../assets/images/nav1.png')} width='120'/>
            <div style={{flex:1}}>
              <Flex style={{fontSize:18,paddingRight:15}} justify="between">
                <p>
                  <a href="" style={{color:'#fff'}}>登录</a>/ <a href="" style={{color:'#fff'}}>注册</a>
                </p>
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
                <span className="iconfont" style={{fontSize:24,marginRight:6}}>&#xe605;</span>
                <span>钱包</span>
              </Flex>
            </Flex>
            <Flex direction="column" style={{flex:1,borderRight:'1px solid #fff'}}>
              <p style={{padding:6}}>0</p>
              <Flex style={{padding:6}} align="center">
                <span className="iconfont" style={{fontSize:24,marginRight:6}}>&#xe605;</span>
                <span>钱包</span>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    )
  }
}
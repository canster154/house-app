import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, WhiteSpace, List, InputItem, WingBlank, Button,Toast } from 'antd-mobile';
import '../assets/styleSheets/iconfont.css';

export default class Login extends React.Component {
  state={
    username:'',
    pwd:'',
    hasError:false
  };
  nameInput = (val) => {
    if(val.replace(/\s/g,'').length<11){
      this.setState({hasError:true})
    }else{
      this.setState({hasError:false})
    }
    this.setState({username:val})
  };
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确的手机号！');
    }
  }
  pwdInput = (val) => {
    this.setState({pwd:val})    
  };
  
  render() {
    return (
      <div style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, background: '#fff' }}>
        <Flex justify="center">
          <img src={require('../assets/images/logo.png')} width={150} />
        </Flex>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <List>
            <InputItem
              type="phone"
              clear={true}
              value={this.state.username}
              onChange={this.nameInput}
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              placeholder="请输入用户名">
              <span className="iconfont" style={{ fontSize: '20px', color: '#0af' }}>&#xe646;</span>
            </InputItem>
            <InputItem
              clear={true}
              value={this.state.pwd}
              onChange={this.pwdInput}
              placeholder="请输入密码"
              type="password">
              <span className="iconfont" style={{ fontSize: '20px', color: '#0af' }}>&#xe619;</span>
            </InputItem>
          </List>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Button type="primary">登录</Button>
          <WhiteSpace size="md" />
          <Flex justify="between">
            <Link to="/register" style={{ color: '#0af' }}>手机快速登录</Link>
            <Link to="/forgot" style={{ color: '#0af' }}>忘记密码？</Link>
          </Flex>
        </WingBlank>
        <Flex justify="center" style={{position:'fixed',bottom:'10px',left:'0',right:'0',color:'#ccc'}}>
          <p>注册即代表您同意我公司<Link to="/404" style={{ color: '#7af' }}>《用户协议》</Link></p>
        </Flex>
      </div>
    );
  }
}
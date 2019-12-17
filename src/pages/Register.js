import React from 'react';
import { Flex, WhiteSpace, List, InputItem, WingBlank, Button, Checkbox } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;

export default class Register extends React.Component {
  toLogin = () => {
    this.props.history.push('/login')
  };
  render() {
    return (
      <div style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入手机号" />
            <InputItem placeholder="请输入密码" />
            <InputItem placeholder="请输入验证码" />
          </List>
          <Flex>
            <Flex.Item>
              <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                我已同意 <a style={{color:'#0af'}} onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户服务协议》及《隐私权政策》</a>
              </AgreeItem>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="md" />
          <Button type="primary" onClick={this.toLogin}>注册</Button>
          <WhiteSpace/>
          <Flex justify="start">
            <a href="#/login" style={{color:'#0af'}}>已有账号</a>
          </Flex>
        </WingBlank>
      </div>
    );
  }
}
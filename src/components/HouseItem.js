import React from 'react';
import {Flex} from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class HouseItem extends React.Component {
  // 设置默认值
  static defaultProps = {
    item:{}
  };

  clickCB= () => {
    this.props.toDetail();
  };

  render() {
    const {item,key} = this.props;
    return (
      <Flex style={{ padding: '5px 0' }} align="start" onClick={this.clickCB}>
        <img src={item.pic} width="100" height="120" />
        <div style={{ marginLeft: 6, flex: 1 }}>
          <Flex justify="between">
            <h3 style={{ margin: 0 }}>{item.name}</h3>
            <h4 style={{ margin: 0, color: '#f00' }}>{item.price}/平</h4>
          </Flex>
          <p style={{ margin: '6px 0', color: '#aaa' }}>{item.address}</p>
          <p style={{ color: '#aaa' }}>4室2厅 200平</p>
        </div>
      </Flex>
    )
  }
}

export default withRouter(HouseItem);
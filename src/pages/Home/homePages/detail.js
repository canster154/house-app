import React from 'react';

export default class Detail extends React.Component{
  render(){
    return (
      <div>商品详情页--{this.props.location.query.item.name}</div>
    )
  }
}
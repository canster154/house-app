import React from 'react';
import HouseItem from '../../../components/HouseItem';
// 引入react-redux插件
import {connect} from 'react-redux';

class History extends React.Component{
  render(){
    return (
      <div style={{padding:10}}>
        {
          this.props.historyList.map(item=>{
            return (
              <HouseItem item={item} key={item.id}/>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {historyList:state.historyList}
};

export default connect(mapStateToProps)(History);
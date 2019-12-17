import React from 'react';
import './Main.css';
import '../../assets/styleSheets/iconfont.css';

export default class Main extends React.Component{
  render(){
    return (
      <div id="main">
        <header className="header">
          <div className="city">
            <p>城市</p>
          </div>
          <div className="inputBox">
            <span className="iconfont">&#xe696;</span>
            <input/>
          </div>
          <div className="map">
            <p>地图</p>
          </div>
        </header>
      </div>
    );
  }
}
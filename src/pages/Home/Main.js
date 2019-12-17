import React from 'react';
import './Main.css';

export default class Main extends React.Component{
  render(){
    return (
      <div id="main">
        <header className="header">
          <div className="city">
            <p>城市</p>
          </div>
          <div className="inputBox">
            <input/>
          </div>
          <div className="map">
            <p>地图123</p>
          </div>
        </header>
      </div>
    );
  }
}
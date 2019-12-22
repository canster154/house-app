import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入UI框架样式
import 'antd-mobile/dist/antd-mobile.css';
// 引入字体图标
import './assets/styleSheets/iconfont.css';
// 引入axios拦截器
import './utils/axiosUtil';
// 引入redux仓库
import './utils/store';

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import Nav from './pages/Nav';
// 引入redux插件和全局仓库
import {Provider} from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Nav />
      </div>
    </Provider>
  );
}

export default App;
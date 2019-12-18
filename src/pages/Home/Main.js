import React from 'react';
import { Flex, TabBar } from 'antd-mobile';
import LoadAble from 'react-loadable';

const Loading = () => { return (<div>加载中...</div>) };

const Home = LoadAble({
  loader: () => import('./homePages/Home'),
  loading: Loading
})

const Chat = LoadAble({
  loader: () => import('./homePages/Chat'),
  loading: Loading
})

const My = LoadAble({
  loader: () => import('./homePages/My'),
  loading: Loading
})

export default class Main extends React.Component {
  state = {
    tabList: [
      { id: 0, title: '首页', icon: '\ue62b', iconSe: '\ue611' },
      { id: 1, title: '微聊', icon: '\ue708', iconSe: '\ue622' },
      { id: 2, title: '推荐', icon: '\ue60b', iconSe: '\ue60d' },
      { id: 3, title: '我的', icon: '\ue641', iconSe: '\ue612' },
    ],
    selectedTab: 3
  };
  renderContent = (id) => {
    switch (id) {
      case 0:
        return <Home />;
      case 1:
        return <Chat />;
      case 2:
        return <p>推荐中...</p>;
      case 3:
        return <My />;
      default:
        return <Home />;
    }
  };
  render() {
    return (
      <div id="main" style={{ position: 'fixed', top: 0, right: 0, left: 0, bottom: 0, background: '#fff' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#fff"
        >
          {
            this.state.tabList.map(item => {
              const { id, title, icon, iconSe } = item;
              return (
                <TabBar.Item
                  title={title}
                  key={id}
                  icon={<span className="iconfont" style={{ fontSize: 26 }}>{icon}</span>}
                  selectedIcon={<span className="iconfont" style={{ fontSize: 26 }}>{iconSe}</span>}
                  selected={this.state.selectedTab === id}
                  onPress={() => {
                    this.setState({
                      selectedTab: id,
                    });
                  }}
                >
                  {this.renderContent(id)}
                </TabBar.Item>
              );
            })
          }
        </TabBar>
      </div>
    );
  }
}
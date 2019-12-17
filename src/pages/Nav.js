import React from 'react';
import {HashRouter,Switch,Route,Link} from 'react-router-dom';
import LoadAble from 'react-loadable';
import Main from './Home/Main';

const Loading = () => {return (<div>加载中...</div>)};

const Login = LoadAble({
  loader: () => import('./Login'),
  loading: Loading
})

const Register = LoadAble({
  loader: () => import('./Register'),
  loading: Loading
})

const Personal = LoadAble({
  loader: () => import('./Home/Personal'),
  loading: Loading
})

const ErrorPage = LoadAble({
  loader: () => import('./ErrorPage'),
  loading: Loading
})

export default class Nav extends React.Component{
  render(){
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/personal" component={Personal}/>
            <Route component={ErrorPage}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
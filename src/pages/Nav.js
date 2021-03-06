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

const CityList = LoadAble({
  loader: () => import('./Home/homePages/CityList'),
  loading: Loading
})

const Search = LoadAble({
  loader: () => import('./Home/homePages/Search'),
  loading: Loading
})

const Detail = LoadAble({
  loader: () => import('./Home/homePages/detail'),
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

            <Route path="/citylist" component={CityList}/>
            <Route path="/search" component={Search}/>

            <Route path="/detail" component={Detail}/>
            
            <Route component={ErrorPage}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
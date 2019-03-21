//根组件
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import '../common.scss'
import { homePage,logo,login } from './rootTable'
import HomePage from '../component/home/homePage'
import Logo from '../component/logo/logo'
import Login from '../component/login/login'
export default class App extends Component {
  componentDidMount(){
  }
  render () {
    return (
      <div className={'app'}>
        <Switch>
          <Route path={homePage} component={HomePage}/>
          <Route path={logo} component={Logo}/>
          <Route path={login} component={Login}/>
          <Redirect to={logo}/>
        </Switch>
      </div>
    )
  }
}

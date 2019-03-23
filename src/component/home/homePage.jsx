import React, { Component } from 'react'
import Navigation from '../../rooter/navigation/navigation'
import Footer from '../../rooter/footer/footer'
import HomeContent from './homeContent/homeContent'
import MarketRoute from './market/marketRoute'
import { Route, Switch, Redirect } from 'react-router-dom'
import { homeContent,marketRoute,community } from '../../rooter/rootTable'
import Community from './community/community'
export default class HomePage extends Component {
  render () {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route path={homeContent} component={HomeContent}/>
          <Route path={marketRoute} component={MarketRoute}/>
          <Route path={community} component={Community}/>
          <Redirect to={homeContent}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
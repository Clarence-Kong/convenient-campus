import React,{Component} from 'react'
import CommunityNavigation from './CommunityNav/CommunityNavigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import { communityContent } from '../../../rooter/rootTable'
import CommunityContent from './CommunityContent/CommunityContent'
export default class Community extends Component{
  render(){
    return(
      <div>
        <CommunityNavigation/>
        <Switch>
          <Route path={communityContent} component={CommunityContent}/>
          <Redirect to={communityContent}/>
        </Switch>
      </div>
    )
  }
}
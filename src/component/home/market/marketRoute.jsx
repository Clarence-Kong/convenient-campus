import React,{Component} from 'react'
import {market,store} from "../../../rooter/rootTable";
import {Switch,Route,Redirect} from 'react-router-dom'
import Store from './store/store'
import Market from "./marketContent/market";
export default class MarketRoute extends Component{
    render(){
        return(
            <Switch>
                <Route path={store} component={Store} />
                <Route path={market} component={Market} />
                <Redirect to={store} />
            </Switch>
        )
    }
}
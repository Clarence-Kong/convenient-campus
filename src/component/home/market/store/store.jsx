import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {market} from '../../../../rooter/rootTable'
import {Button} from 'antd'
import './store.scss'

export default class Store extends Component {
    render() {
        return (
            <div className={'store'}>
                <div className="cloud cloud1">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="cloud cloud2">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <NavLink to={market}><Button block className="sign">Get In</Button></NavLink>
                <div className="store_roof">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="store_roof_opening"></div>
                <div className="store_window"></div>
                <div className="store_door"></div>
                <div className="store_sign">shops</div>
                <div className="store_frame_shadow"></div>
                <div className="store_frame"></div>
                <div className="store_inner_wall"></div>
                <div className="store_wall"></div>
                <div className="store_floor"></div>
                <div className="kerb">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="road"></div>
                <div className="floor"></div>
            </div>
        )
    }
}
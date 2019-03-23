import React, {Component} from 'react'
import './signUp.scss'
import {Button} from 'antd'
import {NavLink} from 'react-router-dom'
import {homeContent} from '../../../rooter/rootTable'
export default class SignUp extends Component {
    load=()=>{

    }
    render() {
        return (
            <div className={'signUp'}>
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked readOnly readOnly/>
                        <label htmlFor="tab-1"
                               className="tab">Sign
                            In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                        <label htmlFor="tab-2"
                               className="tab">Sign
                            Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" placeholder="password"/>
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check" checked readOnly/>
                                    <label htmlFor="check"><span className="icon">
                                            </span> Keep me Signed
                                        in</label>
                                </div>
                                <div className="group">
                                    <NavLink to={homeContent}> <Button block className="buttonA" >Sign In</Button></NavLink>
                                </div>
                                <div className="hr">
                                </div>
                                <div className="foot-lnk">
                                    <a href="">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" placeholder="password"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Repeat Password</label>
                                    <input id="pass" type="password" className="input" placeholder="password"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Email Address</label>
                                    <input id="pass" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <Button block className="buttonA" >
                                        Sign Up
                                    </Button>
                                </div>
                                <div className="hr">
                                </div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
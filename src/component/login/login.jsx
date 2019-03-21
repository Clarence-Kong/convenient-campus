import React,{Component} from 'react'
import './login.scss'
import {NavLink} from 'react-router-dom'
import {homeContent} from '../../rooter/rootTable'
export default class Login extends Component{
  render(){
    return(
      <div className="vid-container">
        <video className="bgvid" autoPlay="autoplay" muted="muted" preload="auto" loop>
          <source
            src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?1410742112"
            type="video/webm"/>
        </video>
        <div className="inner-container">
          <video className="bgvid inner" autoPlay="autoplay" muted="muted" preload="auto" loop>
            <source
              src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?random=1"
              type="video/webm"/>
          </video>
          <div className="box">
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
           <NavLink to={homeContent}> <button>Login</button></NavLink>
            <p>Not a member? <span>Sign Up</span></p>
          </div>
        </div>
      </div>
    )
  }
}
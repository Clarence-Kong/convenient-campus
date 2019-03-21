import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Menu, Dropdown, Icon, Avatar,
} from 'antd'
import { changeBgc } from '../../redux/actions'
import { community, market, homePage } from '../rootTable'
import './navigation.scss'
import { connect } from 'react-redux'

const menu = (
  <Menu>
    <Menu.Item key="1">个人中心</Menu.Item>
    <Menu.Item key="2">我的店铺</Menu.Item>
    <Menu.Item key="3">常去路线</Menu.Item>
  </Menu>
)

class Navigation extends Component {
  changeToMarket = () => {
    this.props.changeBgc(['#1e89e0', '#1e89e0', '#126bae',])
  }

  changeToFirst = () => {

    this.props.changeBgc(['#126bae', '#1e89e0', '#1e89e0',])
  }

  changeToCommunity = () => {

    this.props.changeBgc(['#1e89e0', '#126bae', '#1e89e0',])
  }
  render () {
    const {changeColor}=this.props
    console.log(changeColor)
    return (
      <header className={'navigation'}>
        <div className={'container'}>
          <ul>
            <div className={'icon'}>
            </div>
            <NavLink to={homePage}>
              <li style={{background:changeColor[0]}} onClick={this.changeToFirst}>
                <h1 className={'font'}>首页</h1>
              </li>
            </NavLink>
            <NavLink to={community}>
              <li style={{background:changeColor[1]}} onClick={this.changeToCommunity}>
                <h1 className={'font'}>社区伙伴</h1>
              </li>
            </NavLink>
            <NavLink to={market}>
              <li style={{background:changeColor[2]}} onClick={this.changeToMarket}>
                <h1 className={'font'}>店铺</h1>
              </li>
            </NavLink>
          </ul>
          <div className={'user'}>
            <div>
              <Avatar icon="user"/>
            </div>
            <Dropdown overlay={menu}>
              <h3 className="ant-dropdown-link font">
                阿拉斯加上课 <Icon type="down"/>
              </h3>
            </Dropdown>
          </div>
        </div>
      </header>
    )
  }
}
const mapStateToProps = (state) => ({
  changeColor: state.changeColor
})
export default connect(mapStateToProps, {
  changeBgc,
})(Navigation)
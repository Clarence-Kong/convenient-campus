import React from 'react'
import { Menu, Icon } from 'antd'
import './CommunityNavigation.scss'
import CommunitySend from '../CommunitySend/communitySend'

export default class CommunityNavigation extends React.Component {
  state = {
    current: 'menu',
    visible: false,
  }


  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  showModal = (e) => {
    this.setState({
      visible: true,
    })
    this.handleClick(e)
  }

  render () {
    return (
      <div className={'communityNav'}>
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="menu"  onClick={this.handleClick}>
            <Icon type="appstore"/>最新帖子
          </Menu.Item>
          <Menu.Item key="mail"  onClick={this.handleClick}>
            <Icon type="mail"/>我的消息
          </Menu.Item>
          <Menu.Item key="txt" onClick={this.showModal}>
            <Icon type="edit"/>发布帖子
          </Menu.Item>
        </Menu>
        <CommunitySend visible={this.state.visible}/>
      </div>
    )
  }
}

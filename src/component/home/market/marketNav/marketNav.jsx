import React, { Component } from 'react'
import 'element-theme-default'
import { Menu, Button } from 'element-react'
import './marketNav.scss'

export default class MarketNav extends Component {
  render () {
    return (
      <div className={'marketNav'}>
        <div className="line">
        </div>
        <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect}>
          <Menu.Item index="1">综合排序</Menu.Item>
          <Menu.Item index="2">销量</Menu.Item>
          <Menu.Item index="3">好评</Menu.Item>
            <Menu.SubMenu index="4" title="店铺类型">
            <Menu.Item index="2-1">食品</Menu.Item>
            <Menu.Item index="2-2">饮品2</Menu.Item>
            <Menu.Item index="2-3">服饰3</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <div className={'PageButton'}>
          <Button.Group>
            <Button type="primary" icon="arrow-left" size={'small'}>上一页</Button>
            <Button type="primary" size={'small'}>下一页<i className="el-icon-arrow-right el-icon-right">
            </i></Button>
          </Button.Group>
        </div>
      </div>
    )
  }
}
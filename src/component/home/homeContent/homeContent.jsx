import React, { Component } from 'react'
//import anime from 'anime.js';
import './homeContent.scss'
import { connect } from 'react-redux'
import Title from './title/title'
import Order from './order/order'
import Banner from './banner/banner'
import { Parallax, OverPack } from 'rc-scroll-anim'
import QueueAnim from 'rc-queue-anim'
import {Motion,spring,presets} from 'react-motion'
import MarketCards from './marketCard/marketCards'
import { List, Avatar, Divider, Icon } from 'antd'
import { AjaxIP } from '../../../redux/actions'
import MyOrder from './myOrder/myOrder'
import DrawerForm from './title/draw'

const name = [{name: '量子', des: 'kkk'}, {name: 'haha', des: 'kkk'}, {name: 'lll', des: 'kkk'}, {
  name: 'lll',
  des: 'kkk'
}, {name: 'lll', des: 'kkk'}, {name: 'lll', des: 'kkk'}]
const listData = []
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `哇哈哈 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '一个有追求的少年人呀',
    content: '今天你都干了啥呢',
  })
}

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
)

//let path = anime.path('.motion-path-demo path');

class HomeContent extends Component {
  render () {
    return (
      <div className={'homeContent'}>
        <Title/>
        <Banner/>
        <Order/>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <Parallax animation={{x: 0, opacity: 1, playScale: [0.3, 0.8]}}
                      style={{transform: 'translateX(-100px)', opacity: 0}} always={false}>
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                  <IconText type="message" text="2"/>]}
                extra={<img width={272} alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar}/>}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            </Parallax>
          )}
        />

        <OverPack>
          <Divider>今日好店</Divider>
          <QueueAnim key={'queue'}
                     leaveReverse className={'marketCard'}>
            {
              name.map((name, index) => {
                return (
                  < MarketCards name={name.name} des={name.des} key={index}/>
                )
              })
            }
          </QueueAnim>

        </OverPack>
        <div className={'myOrder'}><MyOrder/></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getIpPackage: state.getIpPackage
})
export default connect(mapStateToProps, {
  AjaxIP,
})(HomeContent)

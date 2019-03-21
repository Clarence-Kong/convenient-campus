import React, { Component } from 'react'
import './marketCards.scss'
import { Avatar, Card } from 'antd'
const {Meta} = Card
export default class MarketCards extends Component {
  render () {
    return (
       <div className={'card'}>
         <Card hoverable={true}
               style={{width: 300}}
               cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
           // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
         >
           <Meta
             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
             title={this.props.name}
             description={this.props.des}
           />
         </Card>
       </div>
    )
  }

}
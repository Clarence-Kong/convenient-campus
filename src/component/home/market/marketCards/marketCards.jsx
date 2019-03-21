import React, { Component } from 'react'
import './marketCards.scss'
import { Icon } from 'antd'
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class MarkerCards extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <li className={'shops'}>
        <div className={'shop'}>
          <div className={'shopBg'}>
            <img
              src={'//g-search1.alicdn.com/img/bao/uploaded/i4/i3/3174944909/TB211BDr3mTBuNjy1XbXXaMrVXa_!!3174944909-0-item_pic.jpg_160x160.jpg_.webp'}
              className={'shopBg'}/>

          </div>
          <div className={'introduction'}>
            <h4><a href="">哈哈的店</a> <span className={'check'}>Campus Mall</span></h4>
            <p>买家：<span><a href="">哈哈哈</a></span></p>
            <p>主营：<span><a href="">哇哈哈,嘻嘻嘻嘻</a></span></p>
          </div>
          <div className={'products'}>
            <div className={'product'}><img
              src="//g-search1.alicdn.com/img/bao/uploaded/i4/i3/3174944909/TB211BDr3mTBuNjy1XbXXaMrVXa_!!3174944909-0-item_pic.jpg_160x160.jpg_.webp"
              alt=""/>
              <span className={'price'}><Icon type="alipay"/>:8890.00</span></div>
            <div className={'product'}><img
              src="//g-search1.alicdn.com/img/bao/uploaded/i4/i3/3174944909/TB211BDr3mTBuNjy1XbXXaMrVXa_!!3174944909-0-item_pic.jpg_160x160.jpg_.webp"
              alt=""/>
              <span className={'price'}><Icon type="alipay"/>:8890.00</span></div>
            <div className={'product'}><img
              src="//g-search1.alicdn.com/img/bao/uploaded/i4/i3/3174944909/TB211BDr3mTBuNjy1XbXXaMrVXa_!!3174944909-0-item_pic.jpg_160x160.jpg_.webp"
              alt=""/>
              <span className={'price'}><Icon type="alipay"/>:8890.00</span></div>
            <div className={'product'}><img
              src="//g-search1.alicdn.com/img/bao/uploaded/i4/i3/3174944909/TB211BDr3mTBuNjy1XbXXaMrVXa_!!3174944909-0-item_pic.jpg_160x160.jpg_.webp"
              alt=""/>
              <span className={'price'}><Icon type="alipay"/>:8890.00</span></div>
          </div>
        </div>
        <div className={'bottom'}>
          <div className={'xiao'}>
            <span className={'sell'}>销量:998</span>
            <span>有99件宝贝</span>
            <div className={'icon'}>
              <Popover content={content} title="Title">
                {/*<Button type="primary">Hover me</Button>*/}
                <Icon type="pay-circle" />
              </Popover></div>
          </div>
        </div>
      </li>
    )
  }
}
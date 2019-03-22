import React, {Component} from 'react'
import './marketCards.scss'
import {Icon} from 'antd'
import {Popover} from 'antd';
import one from '../../../../images/1.jpg'
import two from '../../../../images/2.jpg'
import three from '../../../../images/3.jpg'
import four from '../../../../images/4.jpg'

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

export default class MarkerCards extends Component {
    state = {
        pic: [one, two, three, four]
    }

    render() {
        let pic = this.state.pic;
        return (
            <li className={'shops'}>
                <div className={'shop'}>
                    <div className={'shopBg'}>
                        <div className={'img'}>
                        </div>
                    </div>
                    <div className={'introduction'}>
                        <h4><a href="">哈哈的店</a> <span className={'check'}>Campus Mall</span></h4>
                        <p>买家：<span><a href="">哈哈哈</a></span></p>
                        <p>主营：<span><a href="">哇哈哈,嘻嘻嘻嘻</a></span></p>
                    </div>
                    <div className={'products'}>
                        {
                            pic.map((pic, index) => {
                                return (
                                    <div className={'product'} key={index}><img src={pic} alt=""/>
                                        <span className={'price'}><Icon type="pay-circle"/>:8890.00</span></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={'bottom'}>
                    <div className={'xiao'}>
                        <span className={'sell'}>销量:998</span>
                        <span>有99件宝贝</span>
                        <div className={'icon'}>
                            <Popover content={content} title="Title">
                                <Icon type="bars"/>
                            </Popover></div>
                    </div>
                </div>
            </li>
        )
    }
}
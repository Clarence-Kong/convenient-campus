import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import './banner.css'
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
 export default class Banner extends React.Component {
  render(){
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              height:220,
              background: '#364D79',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            广告1
          </TweenOne>
          <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            欢迎入驻
          </TweenOne>
        </Element>
        <Element
          prefixCls="banner-user-elem"
          key="1"
        >
          <BgElement

            key="bg"
            className="bg"
            style={{
              height:220,
              background: '#64CBCC',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>);
  }
}
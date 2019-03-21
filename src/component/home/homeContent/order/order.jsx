import React, { Component } from 'react'
import View from './view'
import './order.scss'
import QueueAnim from 'rc-queue-anim';
import CanvasNest from 'canvas-nest.js';
const config = {
  color: '255,0,0',
  count: 10,
};


export default class Order extends Component {
componentDidMount(){
  let view=document.querySelectorAll('.view')
  for(let i of view){
       const cn = new CanvasNest(i, config);
    }
}
  render () {
    const data = [{name: 'hh',info:'悬赏10积分，5元'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'},{name: 'hh',info:'悬赏'}, ]
    return (
      <div className={'order'}>
        {
          data.map((name, index) => {
            return (

              <div key={index} className={'view'}>
                <QueueAnim delay={300} className="queue-simple">
                 <View name={name.name} key={index} info={name.info}/>
                </QueueAnim>
             </div>
            )

          })
        }
      </div>
    )
  }
}
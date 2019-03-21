import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
import './map.scss'

class Maps extends Component {
  mapEvent = {
    created: (map) => {
      const AMap = window.AMap
      AMap.plugin('AMap.Driving', function () {
        let driving = new AMap.Driving({
          map: map,
          panel: 'panel',
          zoom: 11
        })
        driving.search([
          {keyword: '北京市地震局(公交站)', city: '北京'},
          {keyword: '亦庄文化园(地铁站)', city: '北京'}
        ], function (status, result) {
          if (status === 'complete') {
            console.log('绘制驾车路线完成')
          } else {
            console.log('获取驾车数据失败：' + result)
          }
        })

      })
    }
  }

  render () {
    return (
      <div className={'map'}>
        <div id={'panel'}>
        </div>
        <div className={'maps'}>
          <Map amapkey={'5c44988daada979f56c66c1342a4287a'} events={this.mapEvent}>
          </Map>
        </div>
        <div className={'info'}>
        </div>
      </div>
    )
  }

}

export default Maps
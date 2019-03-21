import React, { Component } from 'react'
import Location from './location/location'
import DrawerForm from './draw'
import { Form } from 'antd/lib/index'
import './title.scss'
export default class Title extends Component {

  render () {
    const Drawer = Form.create()(DrawerForm)
    return (
      <div className={'title'}>
        <Location/>
        <Drawer/>
      </div>
    )
  }
}

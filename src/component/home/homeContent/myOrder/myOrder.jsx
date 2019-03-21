import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import Maps from './map/map'
import './myOrder.scss'
class MyOrder extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  }

  setModal2Visible (modal2Visible) {
    this.setState({modal2Visible})
  }

  render () {
    return (
      <div className={'modal'}>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>我的订单</Button>
        <Modal
          title="我的订单"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          width={'max-content'}
        >
          <div className={'modalMap'}><Maps/></div>
        </Modal>
      </div>
    )
  }
}

export default MyOrder
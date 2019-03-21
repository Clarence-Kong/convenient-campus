import { Modal, Form, Input, Icon } from 'antd'
import React, { Component } from 'react'

export default class CommunitySend extends Component {
  state = {
    visible: false
  }
  hideModal = () => {
    this.setState({
      visible: false,
    })
  }

  componentWillReceiveProps () {
    this.setState({
      visible: this.props.visible
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render () {

    //const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Modal
          title="我要发布"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="发布"
          cancelText="取消"
        >
          <Form>
         {/*   <Form.Item>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your Password!'}],
              })(
                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                       placeholder="Password"/>
              )}
            </Form.Item>*/}
          </Form>
        </Modal>
      </div>
    )
  }
}

function confirm () {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  })
}

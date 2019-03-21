import React, { Component } from 'react'
import {
  Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon,
} from 'antd'

const {Option} = Select

class DrawerForm extends React.Component {
  state = {visible: false}
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }
  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus"/> 发起订单
        </Button>
        <Drawer
          title="发起订单"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: 'auto',
            height: 'calc(100% - 108px)',
            paddingBottom: '108px',
          }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="带点啥">
                  {getFieldDecorator('name', {
                    rules: [{required: true, message: '  你倒是说呀'}],
                  })(<Input placeholder="想让我帮你带点啥"/>)}
                </Form.Item>
              </Col>
              <Col span={12}>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="物品类型">
                  {getFieldDecorator('类型', {
                    rules: [{required: true, message: '选一个'}],
                  })(
                    <Select placeholder="哪种">
                      <Option value="xiao">快递</Option>
                      <Option value="mao">零食</Option>
                      <Option value="mao">日用品</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="目的地">
                  {getFieldDecorator('目的地', {
                    rules: [{required: true, message: '地址不能为空'}],
                  })(
                    <Select placeholder="选择您的地址">
                      <Option value="地址2">地址2</Option>
                      <Option value="地址3">地址3</Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label="悬赏">
                  {getFieldDecorator('悬赏', {
                    rules: [{message: '不悬赏'}],
                  })(
                    <Input placeholder={'悬赏多少好呢'}/>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="取货时间">
                  {getFieldDecorator('dateTime', {
                    rules: [{required: true, message: 'Please choose the dateTime'}],
                  })(
                    <DatePicker.RangePicker
                      style={{width: '100%'}}
                      getPopupContainer={trigger => trigger.parentNode}
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="备注">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="please enter description"/>)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{marginRight: 8}}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default DrawerForm


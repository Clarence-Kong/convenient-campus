import React from 'react'
import {
  Drawer, List, Avatar, Divider, Col, Row, Button
} from 'antd'

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
}

const DescriptionItem = ({title, content}) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
)

export default class View extends React.Component {
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
    return (
      <div>
        <List
          dataSource={[
            {
              name: this.props.name,
            }
          ]}

          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<a onClick={this.showDrawer}>订单详情</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description={this.props.info}
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p style={{...pStyle, marginBottom: 24}}>发起人信息 </p>
          <p style={pStyle}>Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="真实姓名" content="风清扬"/>{' '}
            </Col>
            <Col span={12}>
              <DescriptionItem title="电话" content="-----------"/>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="院校" content="黑龙江大学数据科学与技术学院"/>
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳"/>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="常去路线" content="c19-1号楼"/>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </Col>
          </Row>
          <Divider/>
          <p style={pStyle}>订单信息</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="要带啥" content="可乐"/>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="去哪带" content="C区便利店"/>
            </Col>
            <Col span={12}>
              <DescriptionItem title="送到哪" content="C19 736"/>
            </Col>
            <Col span={12}>
              <DescriptionItem title="悬赏" content='10积分 5元'/>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="ball ball"
                content="叽叽叽叽"
              />
            </Col>
          </Row>
          <Divider/>
          {/*<p style={pStyle}>Contacts</p>*/}
          {/*<Row>*/}
          {/*<Col span={12}>*/}
          {/*<DescriptionItem title="Email" content="AntDesign@example.com"/>*/}
          {/*</Col>*/}
          {/*<Col span={12}>*/}
          {/*<DescriptionItem title="Phone Number" content="+86 181 0000 0000"/>*/}
          {/*</Col>*/}
          {/*</Row>*/}
          {/*<Row>*/}
          {/*<Col span={24}>*/}
          {/*<DescriptionItem*/}
          {/*title="Github"*/}
          {/*content={(*/}
          {/*<a href="http://github.com/ant-design/ant-design/">*/}
          {/*github.com/ant-design/ant-design/*/}
          {/*</a>*/}
          {/*)}*/}
          {/*/>*/}
          {/*</Col>*/}
          {/*</Row>*/}
          <Button icon="search"> 这单我接了</Button>
        </Drawer>

      </div>
    )
  }
}

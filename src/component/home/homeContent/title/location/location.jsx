import React, { Component } from 'react'
import { Icon } from 'antd'
import './location.scss'
import { connect } from 'react-redux'
import { AjaxIP, AjaxSearch } from '../../../../../redux/actions'
import Search from './search/search'
const AmapKey = 'b910a0d8cede41a554045cd3e4a996fd'
class Location extends Component {

  componentWillMount () {
    this.props.AjaxIP(AmapKey)
  }

  render () {
    let place=this.props.getIpPackage.city
    if(typeof (this.props.getIpPackage)!=='object'){
      place=this.props.getIpPackage
   }
    return (
      <div className={'location'}>
        <span>当前位置:{place}</span>
        <span className={'gps'}> </span>
        <Icon type="edit" theme="twoTone" title={'更改地址请搜索'}/>
        <Search />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getIpPackage: state.getIpPackage,
  getSearchPackage: state.getSearchPackage,
})
export default connect(mapStateToProps, {
  AjaxIP, AjaxSearch
})(Location)
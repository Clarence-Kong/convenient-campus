import React from 'react'
import { Icon, Input, AutoComplete } from 'antd'
import { AjaxSearch,searchPlace } from '../../../../../../redux/actions'
import { connect } from 'react-redux'

const Option = AutoComplete.Option
const OptGroup = AutoComplete.OptGroup
let dataSource = [{
  title: '哈尔滨市',
  children: [{
    title: '黑龙江大学',
  }],
}]

function renderTitle (title) {
  return (
    <span>
      {title}
      <a
        style={{float: 'right'}}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  )
}

let options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
  </Option>,
])

function Complete () {
  return (
    <div className="certain-category-search-wrapper" style={{width: 200}}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{width: 300}}
        size="small"
        style={{width: '100%'}}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input className={'hh'} suffix={<Icon type="search" className="certain-category-icon"/>}/>
      </AutoComplete>
    </div>
  )
}

const AmapKey = 'b910a0d8cede41a554045cd3e4a996fd'

class Search extends React.Component {

  change = (e) => {
    let place = e.target.value
    setTimeout(() => {
      this.props.AjaxSearch(AmapKey, place)
      let searchPackage = this.props.getSearchPackage
      dataSource = searchPackage.map((data, index) => {
        return (
          {
            title: data.district + data.address,
            children: [{
              title: data.name,
            }],
          }
        )
      })
      options = dataSource.map((group, index) => (
        <OptGroup
          key={index}
          label={renderTitle(group.title)}
        >
          {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
              {opt.title}
            </Option>
          ))}
        </OptGroup>
      ))

    }, 1000)
  }
click=(e)=>{
  let place = e.target.innerHTML
  this.props.searchPlace(place)
}
  render () {
    return (
      <div className={'input'} onChange={this.change} onClick={this.click}><Complete/></div>

    )
  }
}

const mapStateToProps = (state) => ({
  getSearchPackage: state.getSearchPackage,
})
export default connect(mapStateToProps, {
  AjaxSearch,searchPlace
})(Search)
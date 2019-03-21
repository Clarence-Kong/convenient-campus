import axios from 'axios/index'
import fetchJsonp from 'fetch-jsonp'
import {
  GET_IPLOCATION, GET_SEARCH, SEARCH_PLACE, CHANGE_BGC
} from './action-types'

export const changeBgc = (data) => ({
  type: CHANGE_BGC, data: data
})
export const searchPlace = (data) => ({
  type: SEARCH_PLACE, data: data
})
export const getIpPackage = (data) => ({
  type: GET_IPLOCATION, data: data
})
export const AjaxIP = (amapkey) => {
  return dispatch => {
    const url = `/v3/ip?key=${amapkey}`
    axios.get(url)
      .then(response => {
        const ipPackage = {
          province: response.data.province,
          city: response.data.city,
        }
        dispatch(getIpPackage(ipPackage))
      })
  }
}
//搜索
export const getSearch = (data) => ({
  type: GET_SEARCH, data: data
})
export const AjaxSearch = (amapkey, place) => {
  return dispatch => {
    fetchJsonp(`https://restapi.amap.com/v3/assistant/inputtips?output=json&keywords=${place}&key=${amapkey}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        let serchPackage = json.tips.map((data, key) => {
          return ({
            name: data.name,
            district: data.district,
            address: data.address
          })
        })
        dispatch(getSearch(serchPackage))
      })
  }
}
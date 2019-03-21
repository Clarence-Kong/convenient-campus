import { combineReducers } from 'redux'

import { GET_IPLOCATION, GET_SEARCH, SEARCH_PLACE, CHANGE_BGC } from './action-types'

function changeColor (state = ['#126bae', '#1e89e0', '#1e89e0',], action) {
  switch (action.type) {
    case CHANGE_BGC:
      return action.data
    default:
      return state
  }
}

function getIpPackage (state = [], action) {
  switch (action.type) {
    case GET_IPLOCATION:
      return action.data
    case SEARCH_PLACE:
      return action.data
    default:
      return state
  }
}

function getSearchPackage (state = [], action) {
  switch (action.type) {
    case GET_SEARCH:
      return [...action.data]
    default:
      return state
  }
}


export default combineReducers({
  getIpPackage, getSearchPackage, changeColor,
})
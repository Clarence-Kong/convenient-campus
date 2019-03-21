import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

// 根据counter函数创建store对象
export default createStore(
  reducers,
  applyMiddleware(thunk) // 应用上异步中间件
)
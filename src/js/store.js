/* File Name: store.js                                              *
 * Description: Applying Middleware, logger, thunk, reducers        */

import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers/reducers'

const middleware = applyMiddleware(promise(), thunk, logger)

export default createStore(reducer, middleware)

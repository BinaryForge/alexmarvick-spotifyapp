/* File Name: reducers.js                                           *
 * Description: Combines all reducers together so they are all in a *
 *              single package as opposed to getting only a few at  *
 *              a time for each component                           */

import { combineReducers } from 'redux'

import user from './userReducer'
import artist from './artistReducer'
import songs from './songReducer'
import inGameData from './inGameReducer'

export default combineReducers ({
    user,
    artist,
    songs,
    inGameData
})

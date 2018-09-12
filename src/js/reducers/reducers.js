import { combineReducers } from 'redux'

import user from './userReducer'
import artist from './artistReducer'
import songs from './songsReducer'

export default combineReducers ({
    user,
    artist,
    songs,
})
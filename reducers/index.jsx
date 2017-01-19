import { combineReducers } from 'redux'
import login from './login'
import tweet from './tweet'
import getMyProfile from './getMyProfile'
import getHomeTimeLine from './getHomeTimeLine'

const rootReducer = combineReducers({
    login,
    tweet,
    getMyProfile,
    getHomeTimeLine
})

console.log(rootReducer(undefined, { type: null }));


export default rootReducer
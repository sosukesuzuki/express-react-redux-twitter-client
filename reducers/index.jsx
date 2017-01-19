import { combineReducers } from 'redux'
import login from './login'
import tweet from './tweet'
import getMyProfile from './getjson'

const rootReducer = combineReducers({
    login,
    tweet,
    getMyProfile
})

console.log(rootReducer(undefined, { type: null }));


export default rootReducer
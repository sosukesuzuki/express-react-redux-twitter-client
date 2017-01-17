import { combineReducers } from 'redux'
import login from './login'
import tweet from './tweet'

const rootReducer = combineReducers({
    login,
    tweet
})

console.log(rootReducer(undefined, { type: null }));


export default rootReducer
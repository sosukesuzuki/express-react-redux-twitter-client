
import { SUCCESS_GET_HOME_TL, GET_HOME_TL } from '../constans/ActionTypes'

export default function getHomeTimeLine(state = [], action){
    switch (action.type){
        case GET_HOME_TL:
            return state
        case SUCCESS_GET_HOME_TL:
            return Object.assign({}, state, {
                homeTimeLine: action.homeTimeLine
            })
        default:
            return state
    }
}
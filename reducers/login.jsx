import { LOGIN, LOGOUT } from '../constans/ActionTypes'

const initialState = {
    flg: false
}

export default function login(state = initialState, action) {
    switch (action.type){
        case LOGIN:
            return Object.assign({}, state, {
                flg: true
            })
        case LOGOUT:
            return Object.assign({}, state, {
                flg: false
            })
        default:
            return state
    }
}
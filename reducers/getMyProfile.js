/**
 * Created by suzuki on 2017/01/18.
 */
import { GET_MY_PROFILE, SUCCESS_GET_PROFILE} from '../constans/ActionTypes'

export default function getMyProfile(state = [], action){
    switch (action.type){
        case GET_MY_PROFILE:
            return state
        case SUCCESS_GET_PROFILE:
            return Object.assign({}, state, {
                myProfile: action.profile
            })
        default:
            return state
    }
}
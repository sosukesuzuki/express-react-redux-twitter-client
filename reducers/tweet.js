/**
 * Created by suzuki on 2017/01/17.
 */
import { ADD_TWEET } from '../constans/ActionTypes'

export default function tweet (state = [], action) {
    switch (action.type){
        case ADD_TWEET:
            return state
        default:
            return state
    }

}
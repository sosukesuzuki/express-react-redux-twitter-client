/**
 * Created by suzuki on 2017/01/20.
 */
import { RT_TWEET, FAVORITE_TWEET } from '../constans/ActionTypes'

export default function retweetAndFav(state = [], action){
    switch (action.type){
        case RT_TWEET:
            return state
        case FAVORITE_TWEET:
            return state
        default:
            return state
    }
}
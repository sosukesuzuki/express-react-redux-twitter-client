
/**
 * Created by suzuki on 2017/01/20.
 */

import * as types from '../constans/ActionTypes'
import request from 'superagent'

export function getHomeTimeLine(){
    return {
        type: types.GET_HOME_TL
    }
}

export function successHomeTimeLine(result){
    return {
        type: types.SUCCESS_GET_HOME_TL,
        homeTimeLine: result
    }
}

export function getHomeTimeLineAsync(){
    return function(dispatch){
        dispatch(getHomeTimeLine())
        request.get('http://127.0.0.1:3000/statuses/home_timeline')
            .end(function(err, res){
                if(err){
                    console.log(err.body)
                } else {
                    dispatch(successHomeTimeLine(res.body))
                }
            })
    }
}
/**
 * Created by suzuki on 2017/01/18.
 */
import * as types from '../constans/ActionTypes'
import request from 'superagent'

export function getMyProfile(){
    return {
        type: types.GET_MY_PROFILE
    }
}

export function successGetProfile(result){
    return {
        type: types.SUCCESS_GET_PROFILE,
        profile: result
    }
}


export function getMyProfileAsync(){
    return function(dispatch){
        dispatch(getMyProfile())
        request.get('http://127.0.0.1:3000/account/verify_credentials')
            .end(function(err, res){
                if(err){
                    console.log(err.body)
                } else {
                    dispatch(successGetProfile(res.body))
                }
            });
    }
}

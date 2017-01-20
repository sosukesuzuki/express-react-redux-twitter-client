import * as types from '../constans/ActionTypes'
import request from 'superagent'

export function login (){
    return {
        type: types.LOGIN
    }
}

export function logout (){
    return {
        type: types.LOGOUT
    }
}

 export function loginAsync () {
    return function(dispatch){
        dispatch(login())
        request.get('http://127.0.0.1:3000/request-token')
            .end(function(err, res){
                if(err){
                    console.log(err)
                } else {
                    console.log("success!")
                }
            });
    }
}

export function logoutAsync(){
    return function(dispatch){
        dispatch(logout)
        request.post('http://127.0.0.1:3000/account/end_session')
            .end(function(err, res){
                if(err){
                    console.log(err)
                } else {
                    console.log(res)
                }
            })
    }
}
/**
 * Created by suzuki on 2017/01/17.
 */
import * as types from '../constans/ActionTypes'
import request from 'superagent'

export function newTweet(text){
    return {
        type: types.ADD_TWEET,
        text: text
    }
}

export function deleteTweet(id){
    return {
        type: types.DELETE_TWEET,
        id: id
    }
}

export function favoriteTweet(id){
    return {
        type: types.FAVORITE_TWEET,
        id: id
    }
}

export function rtTweet(id){
    return {
        type: types.RT_TWEET,
        id: id
    }
}

export function tweetAsync(text){
    return function(dispatch){
        dispatch(newTweet(text))
        console.log(text)
        request.post('http://127.0.0.1:3000/status/update/' + text)
            .end(function(err, res){
                if(err){
                    console.log(err)
                } else {
                    console.log("success!")
                }
            });
    }
}




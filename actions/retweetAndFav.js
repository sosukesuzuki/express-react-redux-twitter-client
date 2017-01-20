/**
 * Created by suzuki on 2017/01/20.
 */
import * as types from '../constans/ActionTypes'
import request from 'superagent'

export function favoriteTweet(id){
    return {
        type: types.FAVORITE_TWEET,
        id: id
    }
}

export function favoriteTweetAsync(id){
    return function(dispatch){
        dispatch(favoriteTweet(id))
        console.log(id)
        request.post('http://127.0.0.1:3000/favorites/create/' + id.toString())
            .end(function(err, res){
                if(err){
                    console.log(err)
                } else {
                    console.log(res.body)
                }
            });
    }
}

export function rtTweet(id) {
    return {
        type: types.RT_TWEET,
        id: id
    }
}

export function rtTweetAsync(id){
    return function(dispatch){
        dispatch(rtTweet(id))
        console.log(id)
        request.post('http://127.0.0.1:3000/statuses/retweet/' + id.toString())
            .end(function(err, res){
                if(err){
                    console.log(err)
                } else {
                    console.log(res.body)
                }
            })
    }
}
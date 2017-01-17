var express = require('express');
var twitterAPI = require('node-twitter-api');
var Twitter = require('twitter');
var util = require('util');

var consumerKey = '7OGggcfImlerRKldxqIMjy6ok';
var consumerSecret = 'pncbkLAxfO6X3B5qjedRJSQHpJi5zCfQNZDc8GkBqGvIyGZUdq';

var twitter = new twitterAPI({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    callback: 'http://127.0.0.1:3000/access-token'
});

var app = express();

app.listen(3000);

var _requestSecret;
var _requestToken;
var _accessToken = 'empty';
var _accessSecret = 'empty';

var client;

//リクエストトークン発行
app.get("/request-token", function(req, res) {
    twitter.getRequestToken(function(err, requestToken, requestSecret) {
        if (err)
            res.status(500).send(err);
        else {
            _requestSecret = requestSecret;
            _requestToken = requestToken
            console.log(requestSecret)
            res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
            //リダイレクトしてaccess_tokenも発行
        }
    });
});

//request-token発行後のリダイレクト先
app.get("/access-token", function(req, res) {
    var requestToken = req.query.oauth_token,
        verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
        if (err)
            res.status(500).send(err);
        else
            twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    _accessToken = accessToken;
                    _accessSecret = accessSecret;
                    console.log('Accesstoken: ' + _accessToken + '/Accesssecret: ' + _accessSecret);
                    //token類が発行され終わったのでここでtwitterのクライアント変数に全部一気に代入するよ
                    client = new Twitter({
                        consumer_key: consumerKey,
                        consumer_secret: consumerSecret,
                        access_token_key: _accessToken,
                        access_token_secret: _accessSecret
                    });
                    res.redirect('http://localhost:8080');
                }
            });
    });
});

//後に続くパラメータをツイートします
app.post('/status/update/:tweet', function(req, res){
    client.post('statuses/update', {status: req.params.tweet},  function(error, tweet, response) {
        if(!error) {
            console.log(tweet);  // Tweet body.
            console.log(response);
            res.json({
                message: 'tweet success!!'
            });
        } else {
            res.json({
                message: 'tweet failured!'
            });
        }
    });
});

//指定されたidのツイートを削除する
app.post('/statuses/destroy/:id', function(req, res){
    client.post('statuses/destroy', {id: req.params.id}, function(error, response){
        res.send(response);
    });
});

//後に続くscreen_nameの人のTLをjsonでもらいます
app.get('/statuses/user_timeline/:user', function(req, res){
    client.get('statuses/user_timeline', {screen_name: req.params.user}, function(error, tweets, response){
        if(!error){
            res.send(tweets);
        } else {
            res.json({
                message: 'error! failured!!'
            });
        }
    });
});

//現在ログインしているホームタイムラインをjsonでとってくるよ
app.get('/statuses/home_timeline', function(req, res){
    client.get('statuses/home_timeline', function(error, tweets, response){
        if(!error){
            res.send(tweets);
        } else {
            res.send(response);
        }
    });
});

//ふぁぼります
app.post('/favorites/create/:id', function(req, res){
    client.post('favorites/create', { id: req.params.id }, function(error, response){
            res.send(response)
    });
});

//リツイートします
app.post('/statuses/retweet/:id', function(req, res){
    client.post('statuses/retweet', { id: req.params.id } ,function(error, response){
        res.send(response);
    });
});
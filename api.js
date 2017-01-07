var express = require('express');
var twitterAPI = require('node-twitter-api');

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
var _accessToken;
var _accessSecret;

app.get("/request-token", function(req, res) {
    twitter.getRequestToken(function(err, requestToken, requestSecret) {
        if (err)
            res.status(500).send(err);
        else {
            _requestSecret = requestSecret;
            res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
        }
    });
});

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
                    res.send(user);
                    _accessToken = accessToken;
                    _accessSecret = accessSecret;
                    console.log('Accesstoken: ' + _accessToken + '/Accesssecret: ' + _accessSecret);
                }
            });
    });
});

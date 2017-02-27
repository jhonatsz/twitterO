// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var Twit=require('twit');
var T = new Twit({
  consumer_key:         'b4mTlfI31RCSUEkN81tGPeFFz'
, consumer_secret:      'T2af72XQjGzt9gZ56OUy5jMN3CxcHTB3zRU3M3DZt52cAicy9C'
, access_token:         '539978173-POKT3XdGfSEhHMbiCXDF3B6AwMFf11mBxjDDOQ8U'
, access_token_secret:  'NKpOvvuv6vtqqj6umIxgmGI8kzP5e0AefXlXTreket5iH'
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

// routes will go here

// ====================================
// URL PARAMETERS =====================
// ====================================
// http://localhost:8080/api/users?id=4&token=sadsf4&geo=us
app.get('/api/users', function(req, res) {
  var twitter_handle = req.query.twitter_handle;
  T.get('statuses/user_timeline', {screen_name: twitter_handle, count:1  }, function(err, data, response) {
    // display tweet on console.
    console.log(data);
    res.send(data);
  })

});

// ====================================
// POST PARAMETERS ====================
// ====================================

// POST http://localhost:8080/api/users
// parameters sent with postman x-www-form-urlendcode
app.post('/api/users', function(req, res) {
  var twitter_handle = req.body.twitter_handle;
  T.get('statuses/user_timeline', {screen_name: twitter_handle, count:1  }, function(err, data, response) {
    // display tweet on console.
    console.log(data);
    res.send(data);
  })
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

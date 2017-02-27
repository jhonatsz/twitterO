var Twit=require('twit');
var T = new Twit({
  consumer_key:         'b4mTlfI31RCSUEkN81tGPeFFz'
, consumer_secret:      'T2af72XQjGzt9gZ56OUy5jMN3CxcHTB3zRU3M3DZt52cAicy9C'
, access_token:         '539978173-POKT3XdGfSEhHMbiCXDF3B6AwMFf11mBxjDDOQ8U'
, access_token_secret:  'NKpOvvuv6vtqqj6umIxgmGI8kzP5e0AefXlXTreket5iH'
});

var username='kaiifalcutela';

// Getting tweets based on user timeline
// screen_name: tweeter user
// count: display number of tweets
T.get('statuses/user_timeline', {screen_name: username, count:1  }, function(err, data, response) {
  // display tweet on console.
  console.log(data);
})

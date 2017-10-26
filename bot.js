console.log("The bot has started");



var Twit = require ('twit');

var config = require('./config');


//console.log(config);


var T= new Twit(config);


var params=  { q:     '397',
               count: 2 };


T.get('search/tweets', params, gotdata);

function gotdata(err, data, response) {

  var tweets =data.statuses;
  for (var i = 0; i <tweets.length; i++) {
  console.log(tweets[i].text +'\n\n\n\n\n\n\n');
  }

}

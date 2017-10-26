console.log("The bot has started");



var Twit = require ('twit');

var config = require('./config');


//console.log(config);


var T= new Twit(config);




tweetIt();
setInterval(tweetIt, 1000*20);


function tweetIt(){
              var r = Math.floor(Math.random()*1000);
              var tweet =  { status: 'This is the random no. '+r+' #Hello_world 2 from node js'};


              T.post('statuses/update', tweet , tweeted);

              function tweeted(err, data, response) {


                if (err)
                {console.log("Some error has occured ");}

                else {
                  console.log("It has worked !!!");
                }
              }
     }

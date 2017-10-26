console.log("The follow bot has started");



var Twit = require ('twit');

var config = require('./config');


//console.log(config);


var T= new Twit(config);

var stream = T.stream('user');
stream.on( 'follow' ,followed );


function followed(eventMsg){
    console.log('Follow Event !!!');
    var name=eventMsg.source.name;
    var screenName=eventMsg.source.screen_name;

    tweetIt('.@'+ screenName + 'Thanks for following my master Soumam !!! I am his bot Jordan :) niccce meeting you, Sir will respond to you as soon as he gets time ' );

}


function tweetIt(txt){



              var tweet =  { status: txt };


              T.post('statuses/update', tweet , tweeted);

              function tweeted(err, data, response) {


                if (err)
                {console.log("Some error has occured ");}

                else {
                  console.log("It has worked !!!");
                }
              }
     }

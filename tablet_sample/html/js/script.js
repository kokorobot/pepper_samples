// keeping a pointer to the session is very useful!
var session;

try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

$(function () {
  $('#say').click(sayHelloWorld);
});

function sayHelloWorld() {
  session.service('ALTextToSpeech').then(function (tts) {
    tts.say('Hello World!');
  }, function (error) {
    console.log(error);
  })
}

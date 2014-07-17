$(document).ready( function(){

  var deck = [];
  var yourcards = [];
  var robotcards = [];

  var yourscore = 0;
  var robotscore = 0;

  startNewGame();







  /* Utility functions */


  /* 
   *  initialize new game
   *  creates a new deck 
   *  picks out 5 random cards for the user 
   *  picks out 5 random cards for the robot 
   */

  function startNewGame() {
    if (deck.length == 0) {
      generateDeck();
      //console.log("new deck is: " + deck);

      //create hands
      for( var i = 0; i < 5; i++) {
        yourcards.push(deck.splice(Math.floor(Math.random()*deck.length), 1));
      }

      //create hands
      for( var i = 0; i < 5; i++) {
        robotcards.push(deck.splice(Math.floor(Math.random()*deck.length), 1));
      }

      $("#cards").html(printCards(yourcards));
      //console.log("your cards are: " + yourcards);
      //console.log("robot cards are: " + robotcards);
      //console.log("deck is now: " + deck);

      return true;
    }
    else {
      console.log("Game still in session!");
      return false; 
    }
  }


  /*
   *  Generates a new deck
   */
  function generateDeck() {

    for( var i = 0; i < 2; i++ ) {
      for( var j = 1; j <= 12; j++ ) {
        deck.push( j );
      }
    }
  }

  function printCards(array) {
    var s = array[0];
    for( var i = 1; i < array.length; i++) {
      s = s + ", " + array[i];
    }

    return s;
  }


});

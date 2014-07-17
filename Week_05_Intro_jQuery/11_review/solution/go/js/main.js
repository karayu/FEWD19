$(document).ready( function(){

  var deck = [];
  var yourcards = [];
  var robotcards = [];

  var suites = ["kings", "spades", "hearts", "clubs"];

  startNewGame();




  /* click listener */
  $("#play").click( function () {
    var guess = $("#guess").val();
    console.log(guess);

    var matchIndex = findCard(guess, robotcards);
    if( matchIndex != "no match") {
      $("#robotcard").html("Yes. Matched!");
      
      //I DONT' ACTUALLY KNOW HOW GO FISH WORKS

      //you take robot's card
      yourcards.push(robotcards.splice( matchIndex, 1));
      $("#cards").html(printCards(yourcards));


      //robot takes a new card
      robotcards.push(deck.splice(Math.floor(Math.random()*deck.length), 1));

      $("#winning").html("You won! You got Robot's card: " + guess + ". Robot has to get another one from ");


      console.log("You got Robot's card. Your cards are now: " + yourcards);
      console.log("Robot gets one from deck. Robot cards are: " + robotcards);
      console.log("deck is now: " + deck);

    }
    else { 
      $("robotcard").html("No match. Go fish.");

      var newCard = deck.splice(Math.floor(Math.random()*deck.length), 1);
      yourcards.push(newCard);
      $("#winning").html("You lost. You went and got a new card: " + newCard);
      $("#cards").html(printCards(yourcards));
    }

  });


  function findCard(card, hand) {
    for( var i = 0; i < hand.length; i++) {
      if(card == hand[i]) {
        return i;
      }
    }

    return "no match";
  }


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

      for( var i = 0; i < 5; i++) {
        yourcards.push(deck.splice(Math.floor(Math.random()*deck.length), 1));
      }

      for( var i = 0; i < 5; i++) {
        robotcards.push(deck.splice(Math.floor(Math.random()*deck.length), 1));
      }

      $("#cards").html(printCards(yourcards));
      console.log("your cards are: " + yourcards);
      console.log("robot cards are: " + robotcards);
      console.log("deck is now: " + deck);

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
    for( var i = 0; i < suites.length; i++ ) {
      for( var j = 2; j <= 13; j++ ) {
        deck.push( j + "-" + suites[i] );
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

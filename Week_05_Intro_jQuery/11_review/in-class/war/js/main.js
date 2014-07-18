$(document).ready( function(){

  //generate cards
  var robocards = [1,2,3,4,5,6,7,8,9,10,11,12];
  var cards = [];
  for( var i = 1; i <= 12; i++) {
    cards.push(i);
  }

  //event listener for clicks on play
  $("#play").click( function() {

   
    //random integer from 0 to 11
    var userindex = Math.floor(Math.random()*cards.length);


    //use random integer to get random card for player
    var usercard = cards[userindex];
    $("#yourcard").html(usercard);

    //random integer from 0 to 11
    var roboindex = Math.floor(Math.random()*robocards.length);
     
    //use random integer to get random card for player
    var robocard = robocards[roboindex];
    $("#robotcard").html(robocard);
    

    console.log("roboindex: " + roboindex);
    console.log("userindex: " + userindex);

    //winning scenario
    if (robocard < usercard) {

      //print out status saying winning
      $("#winning").html("You win! You get both cards!");

      //we get to add both cards
      cards.push(robocard);

      console.log("roboindex: " + roboindex);

      //robot loses their card
      robocards.splice(roboindex, 1);

      console.log("your deck is: " + cards);
      console.log("robot deck is: " + robocards);

    }
    else if (usercard < robocard) {
      //print out status saying losing
      $("#winning").html("You lose! You lose your card!");

      //i lose my card
      cards.splice(userindex,1);

      //robot gets a new card
      robocards.push(usercard);

      console.log("your deck is: " + cards);
      console.log("robot deck is: " + robocards);


    }
    else {
      $("#winning").html("It's a draw. Nothing happens.");

    }


  });
 

});

$(document).ready( function(){

  var robocards = [1,2,3,4,5,6,7,8,9,10,11,12];
  var cards = [1,2,3,4,5,6,7,8,9,10,11,12];

  $("#play").click( function() {

    if ( robocards.length == 0 ) {
      $("#yourcard").html("");
      $("#robotcard").html("");

      $("#winning").html("Game Over. You won all the cards!!! Woo!!!");
    }
    else if (cards.length == 0) {
      $("#yourcard").html("");
      $("#robotcard").html("");

      $("#winning").html("Game Over. You lost all your cards! Boooo");
    }
    else {
      var botindex = Math.floor(Math.random()*robocards.length);
      var index = Math.floor(Math.random()*cards.length);

      var robocard = robocards.splice(botindex,1);
      var card = cards.splice(index,1);
      
      $("#yourcard").html(card);
      $("#robotcard").html(robocard);

      console.log("robocard is " + robocard);
      console.log("card is " + card);

      //robocard = parseFloat(robocard);
      //card = parseFloat(card);

      if(robocard < card) {
        $("#winning").html("You win! You get both cards!");
        cards.push(robocard);
        cards.push(card);

        console.log("resulting cards: " + cards);
        console.log("resulting robocards: " + robocards);
      }
      else if ( card < robocard) {
        $("#winning").html("You lose! Robot gets to have your card");

        robocards.push(robocard);
        robocards.push(card);

        console.log("resulting cards: " + cards);
        console.log("resulting robocards: " + robocards);
      }
    }

  });

});

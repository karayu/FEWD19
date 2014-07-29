var images=["images/animal1.jpg", "images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg","images/animal6.jpg"];
var index = 0; //our position in the images array list

$(document).ready(function () {
  
  //next button
  //increment index. change the image source
  $(".next").click( function() {
    //increment index (our position) by 1 if we're not at the end 
  	if(index < images.length -1) {
  		index++;
  	} 

    //switch the src of our image element to match the index-th item in the images array
  	$("img").attr("src",images[index]);
  }); 

  //back button
  //decrement index. change the image source
  $(".back").click(function() {
    //decrement index (our position) by 1 if we're not at the beginning
  	if(index > 0) {
  		index--;
  	}

    //switch the src of our image element to match the index-th item in the images array
	   $("img").attr("src",images[index]);
  }); 


  $("#select-animal").change(function() {
    //get the value of our dropdown
    index = $("#select-animal").val();
    //switch the src of our image element to match the index-th item in the images array
    $("img").attr("src",images[index]);

  });

});

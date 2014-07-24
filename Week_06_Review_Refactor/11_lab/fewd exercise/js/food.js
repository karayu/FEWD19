var fridge = ["cheese", "eggs", "milk","fruit", "veggies"];

function deleteItems(){
	$("#ingredients").html("");
}

//set up event listener

$("#button").click(function(){
	deleteItems();
	ingredients(fridge);

	function ingredients(fridge){
		console.log("fridge is:" + fridge);
		for(var i = 0; i< fridge.length; i++){
			$("#ingredients").prepend("<li>" + fridge[i] + "</li>");
			
		}
		//check if we have 1 item or less, then alert me by printing something to that area we created
		if(fridge.length === 1 || fridge.length === 0){
			$("#buyStuffAlert").html("Buy more stuff");
		}
		$("#itemCount").html("You have "+ fridge.length + " items");
		fridge.pop();

	}
});
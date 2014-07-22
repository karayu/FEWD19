	/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
 	(i.e) console.log("Question 1" + q1)
 */

/*
Hint: syntax for loops:
array.forEach(function(element,index){
  ...
});

for (var i = 0; i<array.length; i++) {
	....
}


/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. 
 * Use a loop (for loop or forEach) to increase each value by 1 and store the value back in the array.
 * The end result should be an array of numbers with values 2,3,4,5
 */

var q1 = [1,2,3,4];

//***VERSION 1

/*for (var i = 0; i<= q1.length-1; i++) {
	console.log("this is i: " + i);
	console.log("this is the q1 at " + i + ": " + q1[i]);
	q1[i] = q1[i] + 1;
}

*** VERSION 2

var i = 0; 

while( i<= q1.length -1) {
	q1[i] = q1[i] + 1;
	i = i + 1;
}


//***VERSION 3 */

q1.forEach(function(element,index){
   q1[index] = q1[index] + 1;
});



/**
* Question 2
* Create an array of names with Will, Nevan, and Jessica as values. 
* Append each of these names (with <li> and </li> around them) to the .class-list element using a loop. 
* Hint: $(.class).append(); will append things to the class called .class
*/

var q2 = ["Will", "Nevan", "Jessica"];

q2.forEach(function(element,index){
  //element = "will"
  //index = 0

  var ins = "<li>" + element + "</li>";
  $(".class-list").append(ins);

});


/**
 * Question 3
 * Using the array from Question 1, find the average of the numbers in the array 
 * Store the average in q3.
 * Hint: (average=sum of all numbers/number of numbers). 
 */

/*
 * Version 1 of doing Question 3. Using forEach.
 */
var q3 = 0;

q1.forEach(function(element,index){
  q3 = q3 + element; 
});


//q3 is sum of all q1 elements. We divide this by the length of q1 to get the average
q3 = q3 / q1.length;


/*
 * Version 2 of doing Question2 3. Using a for loop.
 */
var q3 = 0;
for( var i = 0; i < q1.length; i++ )
{
	q3 = q3 + q1[i];
}

q3 = q3 / q1.length;



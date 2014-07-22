/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

 var q1 = ["image1.png", "image2.png", "image3.png"];


/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

var q2 = q1[0];


/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

var q3 = q1.length;

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. 
 *  Hint: How can we get the number of elements in the array?
 */

var q4 = q1[q3-1];

/**
 * Question 5
 *  Using the variables from questions 2 and 4, 
 *  write code that would change the src of the first image tag on a web page 
 *  to the src stored in q2 and the last image tag on a web page to the src 
 *  stored in q4. 
 *  Hint: how do we select a tag with JQuery? $("tag")
 *        what does attr() do?
 *        what does eq() do?
 */



$("img").eq(0).attr("src", q2);
$("img").eq(-1).attr("src", q4);




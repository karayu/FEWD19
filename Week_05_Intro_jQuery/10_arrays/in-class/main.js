var array1 = [false, true, 1, "tacos", "beer", "friday night"];
var array2 = [false, true, 1, "1", 2];
var array3 = [false, true, 1, "1", 2];


console.log("array1: " + array1);
console.log("array2: " + array2);
console.log("array3: " + array3);

var comp1 = compare(array1, array2);

if( comp1 ) 
{
	console.log("array 1 and array 2 are equal!");
}
else {
	console.log("array 1 and array 2 are not equal!");
}


function compare(arg1, arg2) {
	for(var i = 0; i<arg2.length; i++ ) {
		if(arg1[i] !== arg2[i]) {
			console.log("not equal!");
			console.log("arg1: " + arg1[i] + " arg2: " + arg2[i]);
			return false;
		}
		else {
			console.log("equal!");
			console.log("arg1: " + arg1[i] + " arg2: " + arg2[i]);

		}

	}
	return true;
}

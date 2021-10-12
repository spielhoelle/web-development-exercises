/*

1. 

q(6)  = 2 + 6 = 8;

h(8)  = q(8) + 4
      = 2 + 8 + 4
      = 14

f(12) = g(12) + h(12) + q(12) + 2
	  =   (2*12 + 4) // g(12)
	  	+ q(12) + 4  // h12
	  	+ q(12)
	  	+ 2

	  =   28
	  	+ 12 + 2 + 4
	  	+ 12 + 2
	  	+ 2

	  = 28 + 18 + 14 + 2
	  = 46 + 14 + 2
	  = 62
*/

// 2.

var hallo = 'foo';
function sayHello() {
	console.log('Hallo World');
}

function countThe7(array) {
	var numSevens = 0;

	for(var i=0; i < array.length; i++) {
		if( array[i] === 7 ) {
			numSevens++;
		}
	}

	return numSevens;
}

sayHello();
console.log(countThe7([1,4,7,3,7,1,7,0,-1,7]));

// 3. 

var fruits = ['Apple', 'Banana', 'Mango',
'Grapefruit'];

fruits[0] = 'Lemon';
fruits[1] = 'Banana';

for(var i=0;i<10;i++) {
	fruits[i] = 'Pickle';
}

var fullrandom = {
	123: 456,
	'hallo': 'world',
	cars: ['bmw', 'porsche', 'tesla',
			'peugoet']
}

fullrandom['123'] = 789;
var key = 'hallooooooo';
fullrandom[key] = 'woooooorld';

// 3.

var yearsBorn = [2002, 1985, 2008, 1998];
var ages = [];

for(var i=0;i<yearsBorn.length;i++) {
	ages.push(2017 - yearsBorn[i]);
}

for(var i=0;i<ages.length;i++) {
	if(ages[i] < 18) 
		console.log('age is ' + ages[i] + ' and not full age');
	else
		console.log('age is ' + ages[i] + ' and full age');
}

function printFullAge(years) {
	var returnArray = [];

	for(var i=0; i<years.length; i++) {
		if( (2017 - years[i]) < 18) {
			returnArray.push(false);
		}
		else {
			returnArray.push(true);
		}
	}

	return returnArray;
}

var ret1 = printFullAge([1999, 2008, 2015]);
var ret2 = printFullAge([2002, 2004, 2009]);

function numberTable1(rows, columns) {
	var returnArray = [];
	for(var i=0; i<rows; i++) {
		var columnArray = [];
		for(var j=0; j<columns; j++) {
			columnArray.push(0);
		}
		returnArray.push(columnArray);		
	}
	return returnArray;
}

console.log(numberTable1(3, 4));

function numberTable2(rows, columns) {
	var returnArray = [];
	for(var i=0; i<rows; i++) {
		var columnArray = [];
		for(var j=0; j<columns; j++) {
			columnArray.push(j+1);
		}
		returnArray.push(columnArray);		
	}
	return returnArray;
}

console.log(numberTable2(3, 4));

function numberTable3(rows, columns) {
	var returnArray = [];
	for(var i=0; i<rows; i++) {
		var columnArray = [];
		for(var j=0; j<columns; j++) {
			columnArray.push(i*columns+j+1);
		}
		returnArray.push(columnArray);		
	}
	return returnArray;
}

console.log(numberTable3(3, 4));

/*
What is a variable? Explain with 5 data types.

	A variable is used to store data in a container,
	which can be used at a later point of time.

	Variables can consist of 5 primitive data types:

	String: A sequence of characters
	Number: A floating point number
	Boolean: Either true or false
	Null: A variable that is null (has not initialized yet)
	Undefined: A variable that does not exist or has no value.

What is an array and how is it different from a variable?

	An array is a ordered list of data, where
	a variable is a container for data.

What is an object and how is it different from an array?

	An object is an unordered set of key-value pairs.
	Its data can be accessed via index numbers.

What are conditional statements and what are they used for?

	Conditional statements execute code blocks only
	if a certain condition is met.

	I.e. the cars can pass the street if the traffic light
		 is green.

What is a for loop and what is the difference to a while-loop?

	A for loop is a conditional statement that executes code blocks
	repetitively until a certain condition becomes false.	

	The for-loop consists of three elements,
	1. the initial expression
	2. the conditional statement
	3. an expression what happens after each iteration	
	
	The while loop consists of one element,
	1. the conditional statement

What is a function?

	A function puts code into a container which can
	have a name. The name can be used to execute the
	code block at a later point of time.

What is a parameter?

	A parameter is data that modifies the behavior
	of a function when calling it.
	
What is a function's return value?
		
	A function can return data as a result of executing
	a code block. A function's result is called its
	return value.
	
*/
/*
var name = 'John';

function first() {
	var greeting = 'Hello! ';
	var x = greeting + name;

	second();

	console.log(x);
}

function second() {
	var greeting = 'Hi! ';
	var x = greeting + name;

	third();

	console.log(x);
}

function third() {
	var greeting = 'Hey! ';
	var x = greeting + name;

	console.log(x);	
}

first();


function parent() {

	var x = 1;
	function child() {
		console.log('x is: ' + x);
	}

	child();
}

parent();



// hoisting

console.log('x: ' + x);

var x = 5;

hello();
function hello() {
	console.log('hallo ');
}


// scoping 1

var global = 0;
function parent() {
	var x = 1;

	function child1() {
		console.log("child1's x is " + x);
	}

	function child2() {
		console.log("child2's x is " + x);

		child2_1();
		function child2_1() {
			console.log("subchild2_1's x is " + x);			
		}	
	}

	child1();
	child2();	
}

parent();

// scoping 2
var a = 'a';
first();

function first() {
	var b = 'b';

	second();
	function second() {
		var c = 'c';
		console.log( a + b + c );
	}
}

// scoping 3
var a = 'a';
first();

function first() {
	var b = 'b';

	second();
	function second() {
		var c = 'c';
		third();		
	}
}

function third() {
	var d = 'd';
	console.log( c );
}

*/

// why can the second function even call the third() function?
// the third() function is in a different scope than the second()

// this
// ~~~~

// show the window object
// 1
console.log(this);

// 2
calculateAge( 1985 );

function calculateAge( year ) {
  console.log( 2017 - year );
  console.log( this );
}

// 3

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
  }
}

john.calculateAge();

// 4

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);

    function innerFunction() {
    	console.log( this );
    }

    innerFunction();

  }
}

john.calculateAge();

// discussion on the JS community, 
// this inside a child function of a method call 
// innerFunction is still a regular function

// 5

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

// method borrowing, we use johns method 
mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this is only assigned to a value when 
// the function or method containing the this
// is called


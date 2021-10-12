
/*
// hoisting
x = 'hallo world';
var x;

console.log(x);

hello();
function hello() {
	console.log('hi');
}

function q(p) {
	console.log(p);
}

// scoping
function parent() {
	var i = 1;

	function child1() {
		var j = 0;
		q('parent x is ' + i);
	}

	function child2() {
		var z = 0;
		q('parent x is ' + i);
	}	

}
*/

/*
	Declare a global variable a and set
	it to 'a'.

	Declare a function first() which has
	a local variable b which has the value
	'b'

	Inside first(), declare a child-function
	second() which has a local variable c
	which has the value 'c'.

	In second(), console.log out all afore
	mentioned variables.	

*/

/*
var a = 'a';

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
	console.log( a + d );
}

first();
*/

/*
calculateAge(1985);
function calculateAge( year ) {
	//console.log(2017 - year);
	console.log(this);
}
var sandra = {
	name: 'Sandra',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(2017 - this.yearOfBirth);
	}
}
var julia = {
	name: 'Julia',
	yearOfBirth: 1988
}
sandra.calculateAge();
//var hw = 'hallo world';
julia.calculateAge = sandra.calculateAge;
julia.calculateAge();
*/

// hoisting 1
/*
function hoist1() {
	a = 20;
	var b = 100;
}

hoist1();
//console.log( a );
console.log( b );
*/

// hoisting 2

/*
function hoist2() {
	console.log(message);
	var message = 'This is hoisting';
}

hoist2();
*/
// scope 1

/*
function bla1() {
	var x = 31;
}

function bla2() {
	child();
	function child() {
		x = 45;
	}
}

bla2();
console.log( x );
*/

// scope 2

/*
if(true) {
	var name = 'Hammad';
	let age = 30;
}

console.log( name );
console.log( age );
*/

var alice = {
	name: 'Alice',
	yearBirth: 1990,
	city: 'Berlin',
	cityBorn: 'London',
	friends: ['Hammad', 'John'],
	helloText: 
			   'Hello my name is %NAME. \n'
			+  'I live in %CITY and I was \n'
			+  'born in %CITYBORN in the year \n'
			+  '%YEARBORN, so I am %AGE years old.\n'
			+  'I have %NUMFRIENDS friends. Their \n'
			+  'names are %FRIENDSNAMES. \n'
}
// 1. Attach a method calculateAge() to Alice prints out the age of Alice
// 2. Attach a method introduce() that generates an introduction text 
//    based on helloText. Find proper replacements for the template tags.
// 3. Create similar objects for the friends Hammad and John. 
//    
//    John, born 1987 in New York, lives in Hamburg
//    Hammad, born 1982 in Glasgow, lives in Berlin
//
// 4. For John and Hammad, attach calculateAge() and introduce() 
//    without copy-pasting it.
alice.calculateAge = function() {
	return (2017 - this.yearBirth);
}
alice.calculateAge();

// 2.
alice.introduction = function() {
	var replacedText = 
		this.helloText.replace('%NAME', this.name)
					  .replace('%CITY', this.city)
					  .replace('%CITYBORN', this.cityBorn)
					  .replace('%YEARBORN', this.yearBirth)
					  .replace('%AGE', this.calculateAge())
					  .replace('%NUMFRIENDS', this.friends.length)
					  .replace('%FRIENDSNAMES', this.friends);
					  //.replace('%')
	console.log(replacedText);
}

// 3.
var john = {
	name: 'John',
	yearBirth: 1987,
	city: 'Hamburg',
	cityBorn: 'New York',
	friends: ['Hammad', 'Alice']
}
john.helloText = alice.helloText;

var hammad = {
	name: 'Hammad',
	yearBirth: 1982,
	city: 'Berlin',
	cityBorn: 'Glasgow',
	friends: ['John', 'Alice']	
}
hammad.helloText = alice.helloText;

//4. 
john.calculateAge = alice.calculateAge;
john.introduction = alice.introduction;

hammad.calculateAge = alice.calculateAge;
hammad.introduction = alice.introduction;

alice.introduction();
john.introduction();
hammad.introduction();


var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Hallo Mars from greet3.js";

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();

// Task 1: Create a module "countdown.js"
// 		   that exports a function which
//         counts from 20 to 0	

var countdown = require('./countdown');
countdown();

// Task 2: Create a module "introduction.js"
//         that exports a function with
//         one parameter userInfo.
//         userInfo should consist of
//         firstname, lastname, email and
//         birthYear.
//
//         When calling the function 
//         "introduction", the module
//         should print out a text like
//         
//         "Hi, my name is FIRSTNAME 
//          LASTNAME and email is EMAIL.
//          I was born in BIRTHYEAR."

var introduction = require('./introduction');
introduction( {
	firstname: 'Jan',
	lastname: 'Schulz',
	email: 'jan.schulz@devugees.org',
	birthYear: 1985
});

var obj = require('./obj');
console.log(obj);

// Task 3: Create a module "Person" that
//		   exports the following function
//         constructor:
//
//		   function Person(firstname, lastname, email, yearOfBirth)
//		{
//			this.firstname = firstname;
//			this.lastname = lastname;
//			this.email = email;
//			this.yearOfBirth = yearOfBirth;
//		}
//
//      3a: Create 3 different persons with the same constructor.
//      3b: Extend the module "Person" by a method that
//          tells the current age.


var Person = require('./person');

var john = new Person('John', 'Smith', 'john@gmail.com', 1990);

var maria = new Person('Maria', 'Smith', 'maria@gmail.com', 1990);

console.log(john);
console.log(maria);


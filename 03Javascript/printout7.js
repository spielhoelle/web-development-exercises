
for(var i1=0; i1<10; i1++) {
    console.log( i1 );
}

console.log('i1 after loop: ' + i1);

function counter() {
    for(var i2=0;i2<10;i2++) {
        console.log(i2);
    }
}

// console.log('k after the loop ' + k);

// conditional block
if(true)
{
    var i3 = 2;
}

console.log('i3: ' + i3);

// anonymous block
{
    var i4 = 3;
}

console.log('i4: ' + i4);

{
    let i5 = 5;
}

// console.log('i5: ' + i5);

if(true) {
    let i6 = 8;
}

// console.log('i6: ' + i6);
for(let i7=0;i7<10;i7++) {
    console.log(i7);
}

// console.log(i7);

// difference between const and var, let

var i8 = 10;
i8 = 15;

console.log(i8);

const i9 = 20;
// i9 = 25;

{
    const i10 = -1;
}
// creates a block scope
console.log(i10);

// expressions as arguments


// unary operators

    +3                                   // returns 3
    +'-3'                                // returns -3
    +'3.14'                              // returns 3.14
    +'3'                                 // returns 3
    +'0xFF'                              // returns 255
    +true                                // returns 1
    +'123e-5'                            // returns 0.00123
    +false                               // returns 0
    +null                                // returns 0
    +'Infinity'                          // returns Infinity
    +'infinity'                          // returns NaN
    +function(val){  return val }        // returns NaN


!false        // returns true
!NaN          // returns true
!0            // returns true
!null         // returns true
!undefined    // returns true
!""           // returns true
!true         // returns false
!-3           // returns false
!"-3"         // returns false
!42           // returns false
!"42"         // returns false
!"foo"        // returns false
!"true"       // returns false
!"false"      // returns false
!{}           // returns false
![]           // returns false
!function(){} // returns false


!!'hi' === true  // returns true
!!1 === true    // returns true
!!0 === false  // returns true

!'hi'  //returns false

!false //returns true

true === true //returns true



x = 4      // x=4
y = x++    // y = 4 and  x = 5
// y is set to the value before incrementing and it adds 1 to x

// Be careful about resetting values when using postfix
var a = 5     // a = 5
a = a++       // a = 5
// a is set to the value before incrementing


x = 4      // x=4
y = ++x    // y = 5 and  x = 5
// y is set to the value after incrementing and it adds 1 to x

var a = 5     // a = 5
a = ++a       // a = 6
// a is set to the value after incrementing

typeof 2                                       // returns 'number'
typeof -3.14                                   // returns 'number'
typeof 0xFF                                    // returns 'number'
typeof 123e-5                                  // returns 'number'
typeof true                                    // returns 'boolean'
typeof false                                   // returns 'boolean'
typeof null                                    // returns 'object'
typeof Infinity                                // returns 'number'
typeof '2'                                     // returns 'string'
typeof '-3'                                    // returns 'string'
typeof 'infinity'                              // returns 'string'
typeof Date()                                  // returns 'string'
typeof [1,2,3]                                 // returns 'object'
typeof {hi: 'world'}                           // returns 'object'
typeof function(val){  return val }            // returns 'function'
typeof {
    valueOf: function(){
        return '0xFF'
    }
}                                              // returns 'object'
typeof undefined                               // returns 'undefined'
typeof hi                                      // returns 'undefined'
typeof NaN                                     // returns 'number'
typeof new Date()                              // returns 'object'
typeof /ab+c/                                  // returns 'object'
typeof new RegExp('ab+c')                      // returns 'object'
typeof document                                // returns 'undefined'

// Deleting a variable
var hi = 1;
delete hi;          // returns false
console.log(hi);    // returns 1

// Deleting a function
function yo(){ };
delete yo;           // returns false
console.log(yo);     // returns function foo(){ }

// Deleting an object
var pub = {bar: '1'}
delete pub           // returns false
console.log(pub);    // returns {bar: '1'}

//Deleting an array
var code = [1,1,2,3,5]
delete code          // returns false
console.log(code);   //  [1,1,2,3,5]


// Deleting a property with the literal notation
var fruits = {1: 'apple', 2: 'mango'}
delete fruits[1]             // returns true
console.log(fruits);         // returns { '2': 'mango' }
console.log(fruits[1]);      // returns undefined

// Deleting a property with the dot notation
var pub = { bar: "42" };
delete pub.bar;              // returns true
console.log(pub);            // returns {}

// Deleting a property that does not exist
var lunch = { fries: 1 };
delete lunch.beans;          // returns true
console.log(lunch);          // returns { fries: 1 }

// Deleting a non-configurable property of a predefined object
delete Math.PI;              // returns false
console.log(Math.PI);        // returns 3.141592653589793


// When Non Configurable
var Person = {};
Object.defineProperty(Person, 'name', {  value: 'Scot', configurable: false })
// Defines an object property and sets it to non-configurable
console.log(Person.value);                                    // returns 'Scot'
delete Person.value                                           // returns false
console.log(Person.value);                                    // returns 'Scot'

// When configurable
var b = {};
Object.defineProperty(Person, 'name', {  value: 'Scot', configurable: true })
console.log(b.value);                                    // returns 'Scot'
delete b.value                                           // returns true
console.log(b.value);                                    // returns undefined


function multiply(a, b=1) {
    return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5));


let i=0;
function inc(p) {
    console.log(p);
}

inc(i=i+2);




// FUNCTION CONSTRUCTORS
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

// capital "P" !!
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	this.foo = null;
	this.calculateAge = function() {
		console.log(2016 - this.yearOfBirth);
	}
}


// instantiaton
var john = new Person('John', 1990, 'teacher');
// new : this points to the empty object
//       NOT to the global Object


// task
var jane = new Person('Jane', 1991, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// each person has the calculateAge method attached
// so we saved a lot of time
// imagine that we had 20 functions in each person

// show prototypes that
Person.prototype.calculateAge = function() {
	console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// go to chrome console and show prototypes

// ...

// then do
// john.__proto__ === Person.prototype

// show until the proto is at Object
// then tell every Object has a prototype

john.hasOwnProperty('job');
// true

john.hasOwnProperty('lastName');
// false

john instanceof Person;

// everything is an object
var x = [2, 4, 6];

// show:
// x. length
// x.__proto__

// x.pop()
// x.push()

var personProto = {
	calculateAge: function () {
		console.log( 2016 - this.yearOfBirth );
	}
};

var john = Object.create( personProto );
john.yearOfBirth = 1990;
john.job = 'teacher';

// lets do that for another person
var jane = Object.create( personProto,
{
	name: { value: 'Jane' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});

// primitives vs objects

// primitives
var a = 23;
var b = a;

a = 46;
console.log(a);
console.log(b);

// objects
var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log( obj1.age );
console.log( obj2.age );

// we did not create a new
// object, we created a reference
// that points to obj1

var age = 32;
var obj = {
	name: 'Jan',
	city: 'Berlin'
};

function change(a, b) {
	a = 30;
	b.city = 'New York';
}

change(age, obj);

console.log( age );
console.log( obj.city );

// passing functions as arguments
// callback

var years = [ 1998, 1965, 1937,
			  2005, 1998, 1985, 1991 ];

function arrayCalc(arr, fn) {
	var arrRes = [];

	for(var i=0; i<arr.length; i++) {
		arrRes.push( fn(arr[i]) );
	}

	return arrRes;
}

function calculateAge( year ) {
	return 2017 - year;
}

var ages = arrayCalc(years, calculateAge);
console.log( ages );

function isFullAge( year ) {
	return year >= 18;
}

var fullAges = arrayCalc( ages, isFullAge );
console.log( fullAges );

function maxHeartRate( age ) {
	if( age >= 18 && age <= 81 )
		return Math.round(206.9 - (0.67 * age));
	else
		return -1;
}

var rates = arrayCalc( ages, maxHeartRate );
console.log(rates);

// functions returning functions
function interviewQuestion( job ) {
	if(job === 'designer') {
		// anonymous function
		return function(name) {
			console.log(name + ', can you '+
				'please explain, what UX design is?');
		}
	}
	else if(job === 'teacher') {
		return function(name) {
			console.log('What subject do you '
				+ 'teach, ' + name + '?');
		}
	}
	else {
		return function(name) {
			console.log('Hello ' + name +
				', what do you do?');
		}
	}
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Michelle');

// other usage
interviewQuestion('teacher')('Mark');

///////////////////////////
// IIFE

function game() {
	var score = Math.random() * 10;
	console.log( score >= 5);
}

game();
(function() {
	var score = Math.random() * 10;
	console.log( score >= 5 );
})();

// console.log( score );

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log( score >= 5 - goodLuck );
})(5);

// Closures
function retirement(retirementAge) {
	var a = ' years left until retirement';

	return function(year) {
		var age = 2016 - year;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

// explain stuff here

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany( 1990 );
retirementUS( 1990 );
retirementIceland( 1990 );

// mini coding challenge
function interviewQuestion( job ) {
	var a = ' Do it!';
	return function(name) {
		if (job === 'designer') {
			console.log( name + ', explain UXD!' + a);
		}
		else if( job === 'teacher' ) {
			console.log( name + ', subjects?' + a);
		}
		else {
			console.log( name + ', whatcha do?' + a);
		}
	}
}


interviewQuestion('designer')( 'Foofoo' );

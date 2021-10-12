/*
var name = "John"; // string

// not console.log("John") ...

console.log("John");
console.log(name);

var age = 26; // number
console.log(age);

var job, married;

job = 'teacher'; // string
married = false; // boolean

console.log( name + ' is ' + age
  + ' years old and is married: ' + married);


var now = 2017;
var birthYear = now - 26;

var ageJohn = 26;
var ageSteffi = ageJohn;

// variable mutation

ageJohn *= 2;
ageJohn = ageJohn * 2;
*/

// if else statements:
/*

var name = "John";
var age = 26;
var married = 'yes';

if(married === 'yes') {
  console.log(name + ' is married');
}
else if(married === 'no') {
  console.log(name + ' is not married yet.')
}

married = false;

if (married === true) {
  console.log(name + ' is married');
}
else {
  console.log(name + ' is not married');
}

// = :
// ==
// ===

var x = 0;

if(x === 1) {
  console.log('hallo world');
}

console.log("x is: " + x);

// boolean logic


var age = -2;

if(age >= 60 && age <= 70) {
  console.log('John is a pre-grandpa.');
}
else if(age > 70) {
  console.log('John is a grandpa.') }
else if(age < 0) {
  console.log('John is not born.')
}

// exercise: 60-70, john is a pre-grandpa
//           greater 70, john is a grandpa
//			 less than 0, is not born


var trafficLight = 'green';

// 'green', 'red', 'yellow'
if (trafficLight === 'green' ||
  trafficLight === 'red' ||
  trafficLight === 'yellow') {
  console.log ("Traffic light is working!");
}
else {
  console.log ("Traffic light is not working!");
}

//

var job = 'teacher';

switch( job ) {
  case 'teacher':
    console.log('he teaches students.');
  break;
  case 'driver':
    console.log('he drives a cab in berlin.');
  break;
  case 'cop':
    console.log('he helps fight crime.')
  break;
}


///////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if(isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}
*/





///////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}



// 1. Create variables for the heights
// and ages of two friends and assign them
// some values

var heightJohn = 170;
var heightMike = 195;

var ageJohn = 36;
var ageMike = 29;

var scoreJohn = heightJohn + (5 * ageJohn);
var scoreMike = heightMike + 5 * ageMike;

console.log('score of john: ' + scoreJohn);
console.log('score of mike: ' + scoreMike);

if( scoreJohn > scoreMike ) {
  console.log('John won.')
}
else if( scoreJohn < scoreMike ) {
  console.log('Mike won.')
}
else {
  console.log('It is a draw');
}

*/

// ==
// ===

/*
function weatherFunction( weather ) {
  console.log('hallo world');
  console.log('how are you today?');

  if(weather === 'good') {
    console.log('good weather today!');
  }
  else {
    console.log('no good weather today');
  }
}

weatherFunction('good');
weatherFunction('bad');
weatherFunction('good');
*/

// create a function q(p) which prints out the string p
// using console.log

// q('hallo world') ... console prints out "hallo world"
// q('the sky is blue') ... console prints out "the sky is blue"


// create a function d(x) which prints out x * 2
/*
function d(x) {
  console.log(2 * x);
}

d(3);
d(4);
d(7);
d(9);
*/


// call f using a string, string
// call f using a number, string
// call f using a number, number
// call f using a number, undefined
// call f using a null, string
// call f using a undefined, string
// call f using a undefined, undefined
/*
f('hallo', ' world');
f(10, 'hallo world');
f(10, 12);
f(13, undefined);
f(null, 'hallo world');
f(undefined, 'hallo world');

f();
f(undefined,);
f(undefined, undefined);
*/
/*
function f(x, y) {
  console.log("x is " + x +" and y is " + y);
}
*/

// extend this function
// print out "hello world" only when x is greater 1
// and y is less then 10
/*
function q(p) {
  console.log(p);
}

function f(x, y)
{
  if( x > 1 && y < 10) {
    q('hello world');
  }
}
*/
// "hoisting" - functions/variables
//			    can be defined before AND
//				after they are called/used


// modify f again and print out "hello world"
// using q and not console.log

/*
function getHelloWorld() {
  return 'hallo world';
}

var hw = getHelloWorld();

console.log( hw );

// write a function f that takes two parameters
// and returns its sum using +
// and when you are done defining f,
// use the return value of f(2, 6) and
// print it out using console.log
// e.g. sum of 1 and 4 is 5

function f(x, y) {
  return x + y;
}

// f(2, 3) turns into 5

console.log( f(2, 6) );

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1969);

console.log('age of john is: ' + ageJohn);
console.log('age of mary is: ' + ageMary);

// write a function retiresIn() that calculates the
// number of years in which a person retires
// this function has two parameters:
//   first:   the name
//   second:  the age
//
//	 example
//   first:   'Jan'
//   second:   31
//
//   result:   'Jan retires in 36 years'
//
//   retirmement age is 67.

function retiresIn(name, age) {
  var retireYears = 67 - age;
  var result = name + ' retires in ' + retireYears
              + ' years'
  return result;
}

console.log(retiresIn('Jan', 31));

/*
  Write a function that generates an introduction
  text about a person.

  name of the function: introduction()

  Parameters:

        firstName, lastName, countryBorn,
        countryLiving, age, residenceCity

  Returns: nothing

  This function creates a text e.g.

  EXAMPLE

  My name is Jan Schulz. I was born in Germany.
  I live in Germany. I am 31 years old. I live in Berlin.

  Write that text using console.log

*/
/*
function introduction(  firstName,
            lastName,
            countryBorn,
            countryLiving,
            age,
            residenceCity)
{
  console.log(  'My name is' + firstName + lastName + '. '
        + 'I was born in ' + countryBorn + '.'
        + 'I live in ' + countryLiving + '.'
        + 'I am ' + age + ' years old. '
        + 'I live in ' + residenceCity);
}

introduction('Jan',
       'Schulz',
       'Germany',
       'Germany',
       31,
       'Berlin');
*/

/*

var name0 = 'John'
var name1 = 'Mary';
var name2 = 'Bob';
var name3 = 'Peter';
var name4 = 'Julia';

// ARRAY
var names = ['John',
       'Mary',
       'Bob',
       'Peter',
       'Julia'];

// create an array that consists of
// your firstname, your lastname and
// your age
// name of array myInfo

var myInfo = ['Jan', 'Schulz', 31];

console.log(myInfo);
// push adds an element to the end
// of the array
myInfo.push('Berlin');
console.log(myInfo);
// unshift adds an element to the
// beginning of the array
myInfo.unshift('Mr.');
console.log(myInfo);
// pop removes the last element of
// the array
myInfo.pop();
console.log(myInfo);
// shift removes the first element
// of the array
myInfo.shift();
console.log(myInfo);

// create an array that consists
// of the numbers 5 to 10
// name: numberArray
//
// - change the value of element with the
//   index 1 to 7
// - add an element 11 at the end
// - add an element -1 at the beginning

var numbers = [5, 6, 7, 8, 9, 10];

numbers[1] = 7;
numbers.push(11);
numbers.unshift(-1);
*/
/*
var names = ['John',  // 0
      'Mary',   // 1
      'Bob',    // 2
      'Julia',  // 3
      'Thomas'  // 4
      ];


console.log( 'Our names array has '
  + names.length + ' items saved.');

names.push( 'Sandra' );
names.push( 'Mark' );
names.unshift( 'Susan' );

console.log( 'Our names array has '
  + names.length + ' items saved.');
*/


// modify the function introduction() that it
// uses ONE array as parameter and NOT 6 variables
// as parameters anymore
/*
function introduction( personInfo ) {
  return('My name is ' + personInfo[0] + ' '
        + personInfo[1] + '. '
        + 'I was born in ' + personInfo[2] + '.'
        + 'I live in ' + personInfo[3] + '.'
        + 'I am ' + personInfo[4] + ' years old. '
        + 'I live in ' + personInfo[5]);
}

console.log(introduction(['Jan',
'Schulz',
'Germany',
'Germany',
31,
'Berlin']));;
*/


/*
// Arrays:
var arrayInfo = [];
arrayInfo[0] = 'Jan';
arrayInfo[1] = 'Schulz';
arrayInfo[2] = 'Germany';
arrayInfo[3] = 31;

// lastname in array
console.log( arrayInfo[1] );
// lastname in object
*/
// Task: Create an object myInfo that describes you
// including your firstname, lastname, age
// and where you were born
// and then console.log the object

var myInfo = {
  firstName: 'Jan',
  lastName: 'Schulz',
  age: 31,
  born: 'Germany'
};

var lectureRoom = {
  lamps: 12,
  wallColour: 'white',
  numberOfStudents: 13
};

function describeRoom( objRoom ) {
  console.log( 'Our room has ' + objRoom.lamps
        + ' lamps. The colour of the walls'
        + ' is ' + objRoom.wallColour + '.'
        + ' ' + objRoom.numberOfStudents
        + ' study here to learn JavaScript');
}
//describeRoom(lectureRoom);

/*

*/
/*
function introduction(  firstName,
            lastName,
            countryBorn,
            countryLiving,
            age,
            residenceCity)
{
  console.log(  'My name is' + firstName + lastName + '. '
        + 'I was born in ' + countryBorn + '.'
        + 'I live in ' + countryLiving + '.'
        + 'I am ' + age + ' years old. '
        + 'I live in ' + residenceCity);
}

// create a function introductionObj()
// which has ONE parameter which is an object
// and has attributes like
// firstName, lastName, countryBorn, countryLiving,
// age, residenceCity
// example: introductionObj() prints out the text
//
// My name is Jan Schulz. I was born in Germany.
// I live in Germany. I am 31 years old. I live
// in Berlin.

function introductionObj( obj ) {
  console.log(
       'My name is ' + obj.firstName + ' ' + obj.lastName + '.'
      + 'I was born in ' + obj.countryBorn + '.'
      + 'I live in ' + obj.countryLiving + '.'
      + 'I am ' + obj.age + ' years old.'
      + 'I live in ' + obj.residenceCity
    );
}


var myInfoFake = {
  firstName: 'Steven',
  lastName: 'Mueller',
  age: 35,
  countryBorn: 'Austria',
  countryLiving: 'Switzerland',
  residenceCity: 'Berlin'
};

introductionObj(myInfoFake);
*/
//
/*
var person = {
  firstName: 'Jan',
  lastName: 'Schulz',
  age: 31,
  countryBorn: 'Germany',
  countryLiving: 'Germany',
  residenceCity: 'Berlin',
  retiresIn: function(age) {
    console.log( 65 - age );
  }
};

person.retiresIn( 31 );
*/
/*
var personArray = [
    'Jan', 			// 0
    'Schulz', 		// 1
    31, 			// 2
    'Berlin'		// 3
];

var personObj = {
  firstName: 'Jan',
  lastName: 'Schulz',
  age: 31,
  city: 'Berlin'
};

// mein alter aus personArray?
console.log( personArray[2] );

// mein alter aus personObj?
console.log( personObj.age );
// 1. variante
console.log('1. ich wohne in ' + personObj.city);
// 2. variante
console.log('2. ich wohne in ' + personObj['city']);
// 3. variante
var key = 'city';
console.log('3. ich wohne in ' + personObj['key']);


var houseObj = {
  windows: 6,
  wallColour: 'white',
  terrace: 1,
  roof: true,
  lights: 'on'
}

console.log( houseObj );
houseObj.lights = 'off';
console.log( houseObj );
*/
/*
var apple1 = {
  color: 'red',
  size: 'big'
}

console.log(apple1);

var apple2 = {
  color: 'green',
  size: 'small'
}

console.log(apple2);

var apples = [
    apple1,
    apple2
  ];

//console.log(apples);

var apple3 = {
  color: 'yellow',
  size: 'big'
}

// add apple3 to the array apples at the end
// of apples

// solution 2
var apples = [
  apple1,
  apple2,
  apple3
]

// solution 1
apples.push( apple3 );
*/

// Loops

// print out Hallo World 10 times
/*
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
console.log( 'Hallo World' );
*/
/*
for (var i = 1; i <= 5; i = i + 1) {
  console.log('Hallo World');
  console.log('i = ' + i);
}

console.log('loop is done');

console.log(names[0]);
*/
// task: use the for-loop of line 691-694
// to console.log out all the items of names
// using i as index value
//
// John
// Jane
// Mary
// Mark
// Bob
/*
var names = [
  'John', // 0
  'Jane', // 1
  'Mary', // 2
  'Mark', // 3
  'Bob'	// 4
];

for( var i=0; i < 5; i = i + 1 ) {
  console.log(names[i]);
}
*/
/*
for( var i=0; false; i = i + 1 ) {
  console.log('chrome is kind of slow.');
}
*/
/*
var apple1 = {
  color: 'red',
  size: 'big'
}
var apple2 = {
  color: 'green',
  size: 'small'
}
var apple3 = {
  color: 'yellow',
  size: 'big'
}
var apples = [
    apple1, // 0
    apple2, // 1
    apple3  // 2
  ];

// task: create a for-loop that
// 		 console.log out all values
//       of the key 'size' of the objects
//		 in the array apples

for(var i = 0; i <= 2; i = i + 1) {
  console.log(apples[i].size);
}
*/


// task: create a function numArray
// 		 which takes two parameters
// 		 a and b which are numbers like
//		 1 and 10 or 5 and 20
//
//       the function returns false
//       if a > b or a < 0 or b < 0
//
//		 otherwise it returns an array
//       of all numbers between a and b
//       including a and b
//
//       EXAMPLE:
//       a = 12 and b = 16
//       numArray returns [12, 13, 14, 15, 16]

/*
function numArray( a, b ) {

  if( a > b || a < 0 || b < 0 ) {
    return false;
  }
  // else is not necessary!

  var retArray = [];
  for(var i=a; i <= b; i = i + 1) {
    retArray.push(i);
  }

  return retArray;
}

console.log( numArray(10, 15) );
*/


// Nested Loops
// Loops inside of loops

// *
// *
// *
// *
// *
// *
// *
/*
for(var i=0; i<6; i++) {
  console.log('*');
}
*/

// *
// **
// ***
// ****
// *****
// ******
// *******

for(var i = 1; i <= 6; i = i + 1) {
  var stars = '*';
  for(var j=1; j <= i; j = j + 1) {
    stars = stars + '*';
  }
  console.log(stars);
}


var numbers = [
  3,6,10,3,6,10
];

console.log('numbers has '
  + numbers.length + ' items');

numbers.push(130);
numbers.push(-1);

console.log('numbers now has '
  + numbers.length + ' items');

// write a for-loop that prints out
// all numbers no matter how big the array
// is.
/*
for( var i=0; i<numbers.length; i++ ) {
  console.log(numbers[i]);
}

console.log('----');

for( var i=numbers.length-1; i>0; i--) {
  console.log(numbers[i]);
}

for( var k = 0; k < 66; k += 2) {
  console.log('k is: ' + k);
}
*/

//
// while loops
/*
var i = 0;
while(i < 5) {
  console.log('i is smaller than 5'
    + '. because i is ' + i);

  i = i + 1;
}
// =

for( var i=0; i<5; i = i + 1) {
  console.log('i is smaller than 5'
    + '. because i is ' + i);
}
*/

/*
  1
  2
  3
  4
  5
*/
/*
// star example
for( var i=1; i<=5; i++) {
  var numStars = '';
  console.log('i = ' + i);
  for( var j=0; j < i; j++) {
    numStars = numStars + '*';
    console.log('j = ' + j);
  }
  console.log(numStars);
}
*/

var i = 0;
while(i < 5) {
  console.log('i is smaller than 5'
    + '. because i is ' + i);

  i = i + 1;
}


var numbers = [3, 6, 10, 12, 15, -1];

// task: output the elements of the
// numbers array using while loop
// and numbers.length

var i = 0;
while( i < numbers.length ) {
  console.log( numbers[i] );
  i++;
}

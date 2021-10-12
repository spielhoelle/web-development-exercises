
/*
// Function constructor
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

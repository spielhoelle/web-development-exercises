
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


// 3

function Item( name, price ) {
  this.name = name;
  this.price = price;
  this.sold = false;
}

Item.prototype.sell = function() {
  this.sold = true;
}

function Book( name, price, author ) {
  Item.call(this, name, price);
  this.author = author;
  this.category = 'book';
}

Book.prototype = Object.create(Item.prototype);

function Movie( name, price, director ) {
  Item.call(this, name, price);
  this.director = director;
  this.category = 'movie';
}

Movie.prototype = Object.create(Item.prototype);

var casino = new Movie( 'Casino', 20, 'Martin Scorsese' );
var it = new Book( 'IT', 20, 'Stephen King' );

casino.sell();
it.sell();

function ComicBook( name, price, author, minAge ) {
  Book.call(this, name, price, author);

  if(minAge === undefined)
    this.minAge = 6;
  else
    this.minAge = minAge;
}

ComicBook.prototype = Object.create(Book.prototype);

var jessicaJones = new ComicBook( 'Jessica Jones', 20, 'Marvel', 12 );
jessicaJones.sell();


// 4

function Animal(name) {
  this.name = name;
}

Animal.prototype.sleep = function() {}
Animal.prototype.eat = function() {}
Animal.prototype.die = function() {}

function Mammal(name) {
  Animal.call(this, name);
}

Mammal.prototype = Object.create( Animal.prototype );
Mammal.prototype.breathe = function() {}

  function Tiger(name) {
    Mammal.call(this, name);
  }

  Tiger.prototype = Object.create(Mammal.prototype);
  Tiger.prototype.kill = function(otherAnimal) {
    otherAnimal.die();
  }

  function Horse(name) {
    Mammal.call(this, name);
  }

  Horse.prototype = Object.create(Mammal.prototype);



function Bird(name) {
  Animal.call(this, name);
}

Bird.prototype = Object.create( Animal.prototype );
Bird.prototype.fly = function() {}

  function Woodpecker(name) {
    Bird.call(this, name);
  }

  Woodpecker.prototype = Object.create( Bird.prototype );

  function Hummingbird(name) {
    Bird.call(this, name);
  }

  Hummingbird.prototype = Object.create( Bird.prototype );

function Fish(name) {
  Animal.call(this, name);
}

Fish.prototype = Object.create( Animal.prototype );
Fish.prototype.swim = function() {}

  function Tuna( name ) {
    Fish.call(this, name);
  }

  Tuna.prototype = Object.create( Fish.prototype );

  function Shark( name ) {
    Fish.call(this, name);
  }

  Shark.prototype = Object.create( Fish.prototype );
  Shark.prototype.kill = function(otherAnimal) {
    otherAnimal.die();
  }

// 4 b

var vitaly = new Tiger('Vitaly');
var nemo = new Shark('Nemo');
var fury = new Horse('Fury');

nemo.kill(fury);
nemo.kill(vitaly);

nemo.die();

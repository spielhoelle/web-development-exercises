
/*
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


*/

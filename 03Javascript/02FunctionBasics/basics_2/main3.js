// Write a function average() that has 3 parameters
//
// x: number
// y: number
// z: number
//
// This function returns (x + y + z) / 3

// correct
function average(x,y,z) {
  return (x+y+z)/3;
}

// Create a function averageArray()
// it has ONE parameter.
// this ONE parameter is an array
// and it's name is myNumbers
// myNumbers has 3 values
// myNumbers = [1, 2, 3]

function averageArray(myNumbers) {
  var avg = (myNumbers[0]
      + myNumbers[1]
      + myNumbers[2]) / 3;

  return avg;
}

console.log( averageArray([1, 2, 3]) );



// Write a function ShiftPop() that has one parameter
// which is an array.
// This function performs a pop() on an array
// and afterwards a shift() and then returns
// the shorter array.

function ShiftPop( array ) {
  array.pop();
  array.shift();
  return array;
}

var fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];

var lessFruits = ShiftPop( fruits );
console.log( ShiftPop(lessFruits) );



//Write a function which counts the 7s in a a array of numbers

function countThe7( array ) {
  var numSevens = 0;
  for(var i=0; i<array.length; i++) {
    if( array[i] === 7 ) {
      numSevens++;
    }
  }

  return numSevens;
}

console.log( countThe7([1,4,7,3,7,1,7,0,-1,7]) );



var fruits = ['Apple', 'Banana', 'Mango', 'Grapefruit'];

fruits[0] = 'Lemon';
fruits[1] = 'Melon';

for(var i=0; i<10; i++) {
  fruits[i] = 'Pickle';
}

var fullrandom = {
  123: 456,
  hallo: 'world',
  cars: ['bmw', 'porsche', 'tesla', 'peugeot']
}

fullrandom['123'] = 789;
var key = 'halloooooo';
fullrandom[key] = ('wooooorld');;
*/
//////////////
//////////////
//////////////
/*
var yearsBorn = [1999, 1985, 2008, 2001];
var emptyArray = [];

for(var i=0; i<yearsBorn.length; i++) {
  var age = 2017 - yearsBorn[i];
  emptyArray.push(age);
}

console.log(emptyArray);
for(var i=0;i<emptyArray.length;i++) {
  if(emptyArray[i] < 18) {
    console.log('Age is '
      + emptyArray[i] + '.'
      + ' The person is minor.');
  }
  else {
    console.log('Age is '
      + emptyArray[i] + '.'
      + ' The person is adult.');
  }
}

function printFullAge(arrayYears) {
  var returnArray = [];

  for(var i=0;i < arrayYears.length; i++) {
    returnArray.push(2017 - arrayYears[i]);
  }

  for(var i=0;i<returnArray.length;i++) {
    if(returnArray[i] < 18) {
      returnArray[i] = false;
    }
    else {
      returnArray[i] = true;
    }
  }

  return returnArray;
}

var full_1 = printFullAge([1965, 2008, 1992]);
console.log(full_1);

var full_2 = printFullAge([1985, 1986, 1987]);

*/
//
//
/*

function numberTable(rows, columns) {
  var returnArray = [];
  var k = 1;

  for(var i=0; i<rows; i++) {
    var subArray = [];
    for(var j=0; j<columns; j++) {
      subArray.push(k);
      k++;
    }
    returnArray.push( subArray );
  }

  return returnArray;
}

console.log( numberTable(3, 4) );
*/

// indexOf: first index
// lastIndexOf: last index
/*
function q(p) {
  console.log(p);
}

var txt1 = "Apple, Banana, Kiwi";
var result1 = txt1.slice(15, 19);

//q(result1);
var result2 = txt1.slice(-4);
q(result2);

var result3 = txt1.substr(7, 6);
q(result3);

var result4 = txt1.replace('Kiwi', 'Orange');
q(result4);

var result5 = txt1.toUpperCase();
q(result5);

var result6 = txt1.toLowerCase();
q(result6);

var firstName = "Aemal";
var lastName = "Sayer";

var result7 = "Hello ".concat(" ", "World");
q(result7);

var result8 = firstName + " " + lastName;
q(result8);

var result9 = "Hallo".concat(":", "bla", "foo");
q(result9);

var str1 = "Hallo world";
var result10 = str1.charAt(0);

console.log(result10);

var str2 = "a,b,c,d,e";

var strArray = str2.split(",");
q(strArray);

var str3 = "s, d, g, j, a, d, e, c";

var strArray2 = str3.split(",").sort();
//strArray2.sort();

q(strArray2);
*/

//var x = countWords(str4, "good");

var e = "12%3@devugees.org";
function validateEmailAddress_(email) {
  var emailParts = email.split('@');

  if(emailParts.length !== 2) {
    console.log('There is no @');
    return false;
  }

  if(emailParts[0].length > 32 || emailParts[0].length < 8) {
    console.log('first part is invalid');
    return false;
  }

  var firstPart = emailParts[0];
  var lastPart = emailParts[1];

  var numNumbers = 0;
  for(var i=0; i < firstPart.length; i++) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numberFound = false;

    for(var j=0; j<numbers.length; j++) {
      if(firstPart.charAt(i) == numbers[j]) {
        numNumbers++;
        numberFound = true;
        break;
      }
    }
  }

  console.log('numbers found: ' + numNumbers);
  if(firstPart.length === numNumbers) {
    console.log('The first part is a number.');
    return false;
  }

  if(firstPart.indexOf('%') > 0 || firstPart.indexOf('$') > 0) {
    console.log('% and $ are not allowed in the first part');
    return false;
  }

  var domainParts = lastPart.split('.');
  if(domainParts.length !== 2) {
    console.log('Domain name is invalid.');
    return false;
  }

  if(		domainParts[1] !== 'com'
     && domainParts[1] !== 'org'
     && domainParts[1] !== 'de'
     ) {
    console.log('Domain ending invalid.')
    return false;
  }

  if( domainParts[0].length > 16 || domainParts[0].length < 5) {
    console.log('Domain name is invalid.');
    return false;
  }

  return true;
}
console.log(validateEmailAddress(e)_);

function cWords(st, word) {
  var x = 0;
  var counter = 0;

  for(var i=0; i <= st.length - word.length; i++) {
    x = st.slice(i, i+word.length);
    console.log('x='+x);
    if(x == word) {
      counter++;
    }
  }

  return counter;
}

console.log( cWords('hallo wie gehts hallo hallo', 'hallo'));
*/

// spread operator

function addFourAges(a,b,c,d) {
    return a+b+c+d; // + undefined
}

var sum = addFourAges(18, 30, 12, 21);
console.log( sum );

// es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
// apply is the same as call with array as parameter list
console.log( sum2 );

// es6
var sum3 = addFourAges(...ages);
console.log( sum3 );

ages.push( 9 ); // its now five ages
var sum4 = addFourAges(...ages);
// var sum4 = addFourAges.apply(null, ages);
console.log( sum4 );

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);


// rest operator
function isFullAge5() {
    console.log( arguments ); // exists in each js function
    // converting from array-like object to real array
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach( function(cur) {
        console.log( (2018 - cur) >= 18 ); // true or false
    });

    // = for(var i)....
}

isFullAge5(1990, 2002, 1965);
isFullAge5(1990, 2002, 1965, 2000, 1975, 2003);

// var a = new Array();
// var b = a.slice();

function isFullAge6( ...years ) {
    console.log( years );
    years.forEach( cur => console.log((2018 - cur) >= 18) );
}

isFullAge6(1990, 1999, 1965);

function isFullAge6b( limit, ...years ) { // rest of the parameters
    console.log( years );
    years.forEach( cur => console.log((2018 - cur) >= 18) )
}

isFullAge6b(21, 1990, 1999, 1965);


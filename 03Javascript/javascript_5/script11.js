// spread operator + rest operators

function addFourAges(a,b,c) {
    return a + b + c;
}


var sum1 = addFourAges(18, 30, 12, 21);

console.log( sum1 );

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log( sum2 );

// ES6
const max3 = addFourAges(...ages); // expand the array into its components
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1'); // for index2.html
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; 

Array.from(all).forEach( cur => cur.style.color = 'purple' );

// rest parameters

// es5 
function isFullAg5() {
    console.log(arugments); // special variable we have access to in all functions
    var argsArr = Array.prototype.slice.call(arguments);
    // slice cuts a piece of an array
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965);
// look at arguments, its not an array and an array like structure
isFullAge5(1990, 1999, 1965, 2018, 1987);

function isFullAge6(...years) {
    console.log(years);
    years.forEach( cur => (2018 - cur) >= 18);
}

isFullAge6(1990, 1999, 1965);

// more advanced rest parameters

// es5 
function isFullAg5b(limit) { // maybe in some countries its 21
    console.log(arugments); // special variable we have access to in all functions
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    })
}

isFullAge5b(21, 1990, 1999, 1965);

function isFullAge6b(limit, ...years) {
    console.log(years);
    years.forEach( cur => (2018 - cur) >= 18);
}


isFullAge6b(21, 1990, 1999, 1965);

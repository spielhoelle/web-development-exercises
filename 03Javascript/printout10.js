// MAPS:

// maps: key value data-structure

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer.');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question'));
console.log(question.size);

question.delete(4);

if(question.has(5)) {
    question.delete(5);
}

// question.clear();

// question.forEach( (value, key) => {
//     console.log('value = ' + value + ', key = ' + key);
// });

for(let [key, value] of question.entries()) {
    // console.log('value = ' + value + ', key = ' + key);    
    if(typeof(key) === 'number') {
        console.log('answer ' + key + ': ' + value);
    }
}

const ans = parseInt(prompt('write the correct answer'));
console.log(question.get(ans === question.get('correct')));


// arrow functions

// arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2018 - el;
});

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map(
    (el, index) => 'Age element ' + (index + 1) + ':' + (2018 - el)
); 

console.log(ages6);
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return 'Age element ' + (index + 1) + age;
});

// arrow functions
// dont have their own this keyword
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click',
            function() {
                var str = 'This is box number ' + self.position + ' and it is '
                            + self.color;
                alert(str);
            }    
    )
    }
}

// box5.clickMe();


// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click',
//             // arrow function shares this keyword of its surroundings
//             () => {
//                 var str = 'This is box number ' + this.position + ' and it is '
//                             + this.color;
//                 alert(str);
//             }    
//     )
//     }
// }

// box6.clickMe();



var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        var self = this;
        document.querySelector('.green').addEventListener('click',
            // arrow function shares this keyword of its surroundings
            () => {
                var str = 'This is box number ' + this.position + ' and it is '
                            + this.color;
                alert(str);
            }    
    )
    }
}

box66.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function() {
        // john is friends with bob and with jane
        var arr = friends.map( function(el) {
            return this.name + ' is friends with ' + el;
        })
    }.bind(this)); // 1st without bind, 2nd create a copy of the function

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(el => {
        // john is friends with bob and with jane
        var arr = friends.map( function(el) {
            return this.name + ' is friends with ' + el;
        })
    }); // 1st without bind, 2nd create a copy of the function

    console.log(arr);
}


// non anonymous arrow functions
// statements

// console.log(f(2)); -> no hoisting here

var f = (x) => {
    return 2*x;
}

// DESTRUCTURING


// ES5
// Destructuring

var john = ['John', 26];
var name = john[0];
var age = john[1];

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};


const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// return multiple values

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);

// CLOSURES


// clojures


// a function that returns a function

function retirement(retirementAge) {
    var a = 'years left until retirement'; // is declared outside of the anonymous function
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }  
}

var retirementUS = retirement( 66 );
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

retirement(66)(1990);

// task: rewrite interview functions to use closures

function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design?');
        }
        else if(job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        }
        else {
            console.log('Hallo ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');


// task: create a counter variable that is in the scope of a function.
//       create an inner function that increases the counter by 1.


function inc() {
    var counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

var c = inc();

console.log( c() );
console.log( c() );
console.log( c() );
console.log( c() );



// Spread + Rest


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




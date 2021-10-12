// functions as returns

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', what is UX?');
        }
    }
    else if(job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject to you teach?');
        }
    }
    else {
        return function(name) {
            console.log(name + ', so what do you do?');     
        }
    }   
}

function sayHello() {
    return function() {
        console.log('Hallo');
    }
}

sayHello()();
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
teacherQuestion('Max');

// Closures
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement( 66 );
retirementUS( 1985 );

var retirementGermany = retirement( 65 );
var retirementIceland = retirement( 67 );
retirementGermany( 1985 );
retirementIceland( 1985 );

// task: 
//
// create a function inc() which has a variable counter that is 
// initially set to 0. create an inner function of inc() that
// increases counter by 1 and returns it.
//
// use the principle of closures to increase the counter 5 times.

function inc() {
    var counter = 0;

    return function() {
        counter++;
        return counter;
    }
}

var c = inc();
// functions are objects
// console.log( c.call(null) );
// console.log( c.call(null) );
// console.log( c.call(null) );
// console.log( c.call(null) );
// console.log( c.call(null) );

console.log( c() );
console.log( c() );
console.log( c() );
console.log( c() );
console.log( c() );





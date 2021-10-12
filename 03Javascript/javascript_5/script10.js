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



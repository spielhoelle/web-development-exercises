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


// do something with maps here.

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
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number '
        });
    }
}


// ES5

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


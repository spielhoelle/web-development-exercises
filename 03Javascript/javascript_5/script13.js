// strings

let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
    return 2018 - year;
}

// ES5 vs ES6
console.log(`This is blabla`);

// String methods of class

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName}`.repeat(5));

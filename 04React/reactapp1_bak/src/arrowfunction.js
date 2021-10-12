// const printMyName = (name) => {
//     console.log(name);
// }

// printMyName('jan');

// let bunny1 = {
//     name: 'bunny1',
//     numbers: [1,2,3,4],
//     showName: function() {
//         this.numbers.forEach(function(n) {
//             console.log(this.name + ' and ' + n);
//         });
//     }
// }

// let bunny2 = {
//     name: 'bunny2',
//     numbers: [1,2,3,4],
//     showName: function() {
//         this.numbers.forEach((n) => {
//             console.log(this.name + ' and ' + n);
//         });
//     }
// }

// bunny1.showName();
// bunny2.showName();

// var a = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];

// var a2 = a.map(function(s) { return s.length });
// var a3 = a.map(s => s.length);

// console.log(a2);
// console.log(a3);

// var func1 = x => x * x; // statement

// function func2(x) { // expression
//     return x * x;
// }

// console.log(func1(2));

// var func3 = (x, y) => { return x*y; }

let numbers = [4, 2, 9, 12, -1];

let foo = numbers.forEach((n) => {
    return 1;
});

console.log('foo: ' + foo); // undefined

numbers.map((n, index) => {
    console.log(n + ', index= ' + index);
});

let doubleNumbers = numbers.map((n, index) => {
    return 2*n;
});

let doubleNumbersIndex = numbers.map((n, index) => {
    return {n: 2*n, i: index};
});

console.log(doubleNumbers);
console.log(doubleNumbersIndex);

let otherNumbers = [5, 12, 8, 130, 44];

const findFirstLargeNumber = (n) => {
    return n === 44;
}

console.log(otherNumbers.findIndex(findFirstLargeNumber)); 
// console.log(otherNumbers.findIndex(8)); 
// does not work, we need testing function


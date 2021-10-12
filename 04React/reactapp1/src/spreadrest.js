// spread

let fruits = ['Apple', 'Banana', 'Lemon'];
let shoppingList = ['Milk', 'Water', ...fruits];

console.log(shoppingList);

function addNumbers(x,y,z) {
    console.log(x+y+z);
}

let args = [2,3,5];
addNumbers(...args);

function countArguments(...args) {
    console.log(args.length);
}

countArguments('hallo', 'world', 'guys');

let arr1 = [1,2,3];
let arr2 = [...arr1];
arr2.push(4);

console.log(arr2);

let arr3 = [0, 1, 2];
let arr4 = [4, 5, 6];
let arr3a = arr3.concat(arr4);
console.log(arr3a);

let arr3b = [...arr3, ...arr4];
console.log(arr3b);

let arr3c = [...arr3, 1000, ...arr4];
console.log(arr3c);

let obj1 = {
    x: 1,
    y: 2
};

let obj2 = {
    ...obj1,
    z: 3
}

console.log(obj2);
function multiply(multiplier, ...args) {
    return args.map( (n) => {
        return multiplier * n;
    });
}

let arr5 = multiply(10, 1, 2, 3);
console.log(arr5);


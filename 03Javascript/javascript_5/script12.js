// arrays es6

const boxes = document.querySelectorAll('.box');
// returns a NodeList, an array-like structure

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes); // diff to splice: slice does not change the array
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5
for(var i=0;i<boxesArr5.length;i++) {
    if(boxesArr5[i].className === 'box blue') {
        // continue;
        break;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6 for of loop
for(const cur of boxesArr6) {
    if(boxesArr6.className === 'box blue') { // className.includes('blue)
        continue;
    }

    cur.textContent = 'I changed to blue';
}

// ES5 - check which one is older than 18
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map( function(cur) {
    return cur >= 18;
});
console.log( full );
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 
console.log(ages.findIndex( cur => cur >= 18));
console.log(ages.find(cur => cur >= 18)); // only the value greater 18
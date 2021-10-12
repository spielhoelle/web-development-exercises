
sayHelloExpression();

// function expression
function sayHelloExpression() {
    console.log('hello from function expression');
}

// sayHelloStatement(); // undefined
// console.log( y );
console.log( x );

// function statement
var sayHelloStatement = function() {
    console.log('hello from function statement');
}

var x = 1;
sayHelloStatement();

// es6
var sayHelloStatement6 = () => {
    console.log('hello from function statement es6');
}

sayHelloStatement6();
var sayHelloStatement6b = (name) => {
    console.log('hello '+name+' from function statement es6');
}

sayHelloStatement6b('max');

var multiply1 = (a, b) => { return a * b }; // imperative with curly brackets
console.log( multiply1(2, 5) );

var multiply2 = (a, b) => a * b ; // functional with no curly brackets
console.log( multiply2(2, 7) );

// task: write an arrow function version of the following 
//       es5 functions

function intro(name, age) {
    return 'My name is ' + name + ' and I am ' + age + ' years old';
}

function doubleArr(arr) {
    return arr.map( function(el) {
        return 2*el;
    });
}

var person = {
    age: 30,
    name: 'max',
    intro: function() {
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old');
    }
}

var intro = (name, age) => 'My name is ' + name + ' and I am ' + age + ' years old';

var doubleArr = arr => arr.map(el => 2*el);

var person = {
    age: 30,
    name: 'max',
    // arrow function uses the window-object context
    // intro: () => { 
    //     console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old')
    // }
    intro() { // es6 shorthand method definition
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old')
    }
}

person.intro();

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click',
//         function() {
//             var str = 'This is box number ' + this.position + ' and the color is ' + this.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();
// parent scope of box6 = window
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {        
        // arrow function uses the this from context right here
        document.querySelector('.green').addEventListener('click',
        () => {
            var str = 'This is box number ' + this.position + ' and the color is ' + this.color;
            alert(str);
        });
    },
    foo1: () => {
        console.log('My position is ' + this.position);
        // this.position is undefined because
        // 'this' will reference to window object
    },
    foo2() { // es6, same as foo2: function() {}
        // parent scope of x
        var x = () => {
            console.log( 'arrow: parent scope this.position = ' + this.position );
            return 2;
        }
        x();
    },
    foo3() {
        // parent scope of x
        var x = function() {
            console.log( 'non-arrow: parent scope this.position = ' + this.position );
        }
        x();        
    }
}

box6.clickMe();
box6.foo1();
box6.foo2();
box6.foo3();



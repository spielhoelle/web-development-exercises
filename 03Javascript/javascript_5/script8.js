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

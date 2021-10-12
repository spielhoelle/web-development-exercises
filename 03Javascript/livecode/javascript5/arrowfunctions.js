const years = [1990, 1965, 1982, 1937];

// es5
let ages5 = years.map(function(el) {
    // return 'i am the replacement of ' + el   
    return 2018 - el;
});

// map performs an anonymous function 
// on each element of an array

// arrow function, imperative 
let ages6a = years.map( (el) => {
    return 2018 - el;
} );

// functional
let ages6b = years.map( el => 2018 - el );

// two parameters, imperative
let ages6c = years.map( (el, index) => {
    return 'index: ' + index + ', age: ' + (2018-el);
});

let ages6d = years.map( 
    (el, index) => 'index: ' + index + ', age: ' + (2018-el)
);

// es5
let box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            
        })
    }
}
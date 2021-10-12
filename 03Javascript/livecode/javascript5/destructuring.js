// destructuring 

var john = ['John', 30];
var name1 = john[0];
var age1 = john[1];

const [name2, age2] = ['John', 30];
console.log( name2 );
console.log( age2 );

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

var firstName1 = obj.firstName;
var lastName1 = obj.lastName;

const {firstName, lastName} = obj; // names need to match the keys
console.log( firstName, lastName );


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 67 - age];
}

const [age, retirement] = calcAgeRetirement( 1985 );
console.log( age );
console.log( retirement );

// task:
//
// 1) create an object tree with attributes numLeafs and
// height and color. create three variables derived from
// the tree using the destructuring operator.
// 2) do the same with the tree represented as array

var treeObj = {
    numLeaf: 5,
    height: 10,
    color: 'brown'
};
var {numLeaf, height, color} = treeObj;

var treeArr = [5, 10, 'brown'];
var [numLeaf2, height2, color2] = treeArr;

Array.prototype.halloWorld = function() {
    console.log('extending Array class');
}

// offtopic: extending JS lib
Array.prototype.doublePush = function(x, y) {
    this.push(x);
    this.push(y);
}

var x = [];
x.doublePush(1, 2);




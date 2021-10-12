// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var jane = {
//     name: 'Jane',
//     yearOfBirth: 1991,
//     job: 'marketing'
// };

// var mark = {
//     name: 'Mark',
//     yearOfBirth: 1948,
//     job: 'taxidriver'
// };

// a function that creates objects: function constructor
function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2018 - this.yearOfBirth;
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
// task create a jane and mark with the
// function constructors
var jane = new Person('Jane', 1991, 'marketing');
var mark = new Person('Mark', 1948, 'taxidriver');

console.log(mark.calculateAge());

var personProto = {
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    },

    sayMyName: function() {
        console.log('My name is' + this.name);
    }
}

var julia = Object.create( personProto );
julia.yearOfBirth = 1991;
julia.job = 'teacher';
julia.name = 'Julia';


var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function() {
        if(this.count === undefined)
            this.count = 0;
        console.log( 'My name is ' + this.myName );
        this.count++;
    },
    setLastName: function(lastname) {
        this.lastname = lastname;
    }
}

var gonzo = {
    myName: 'Gonzo'
}
// alfred.sayYourName.call(gonzo);
// alfred.setLastName.call(gonzo, 'Gonzales');
alfred.sayYourName.apply(gonzo, ['Gonzales']);


// PARENT
function Item( name, price ) {
    this.name = name;
    this.price = price;
    this.sold = false;
}
Item.prototype.sell = function() {
    this.sold = true;
}

// CHILDREN
function Book( name, price, author ) {
    Item.call(this, name, price);
    this.author = author;
    this.category = 'book';
}
Book.prototype = Object.create(Item.prototype);

function Movie( name, price, director ) {
    Item.call(this, name, price);
    this.director = director;
    this.category = 'movie';
}
Movie.prototype = Object.create(Item.prototype);
var Casino = new Movie('Casino', 10, 'Martin Scorsese');
var IT = new Book('IT', 20, 'Stephen King');

Casino.sell();
IT.sell();

function ComicBook( name, price, author, minAge=6 ) {
    Book.call(this, name, price, author);
    if(minAge < 6)
        this.minAge = 6;
    else
        this.minAge = minAge;
}

ComicBook.prototype = Object.create( Book.prototype );

var JessicaJones = new ComicBook('Jessica Jones', 20, 'Marvel', 12);

JessicaJones.sell();

class Item {
    constructor(name, price) {
        this.sold = false;
    }

    sell() {
        this.sold = true;
    }
}

class Book extends Item {
    constructor(name, price, author) {
        super(name, price);
        this.author = author;
        this.category = 'book';
    }
}

class Movie extends Item {
    constructor(name, price, director) {
        super(name, price);
        this.director = director;
        this.category = 'movie';
    }
}

var Casino6 = new Movie('Casino', 20, 'Scorsese');
var IT6 = new Book('IT', 20, 'Stephen King');

Casino6.sell();
IT6.sell();

class ComicBook extends Book {
    constructor(name, price, author, minAge = 6) {
        super(name, price, author);
        if(minAge < 6)
            this.minAge = 6;
        else
            this.minAge = minAge;
    }
}

var JessicaJones = new ComicBook('Jessica Jones', 20, 'Marvel', 12);
JessicaJones.sell();

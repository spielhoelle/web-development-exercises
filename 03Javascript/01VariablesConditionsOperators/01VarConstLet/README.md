[Lesson on Codepen](https://codepen.io/noreading/pen/BJPNYq)  

# The good old "var"

- Can be re-defined
- Can be updated
- Scoped on the window or the function they are defined in

## Definition of a variable
```
var width = 200
console.log('width', width)
```

## Updating a variable
```
width = 400
console.log('width updated', width)
```

## Re-defining a variable
```
var width = 600
console.log('width re-defined', width)
```

## Local variable in a function

```
function hello () {
  var firstname = 'world'
  console.log(`Hello ${firstname}`) //works
}
console.log(firstname) // Throws an error
```

The variable `firstname` is bound to the scope of the function. The `console.log()` will throw an error, as it cannot access it from the outside.

## Some rules
- [Never use reserved keywords for variable names](http://mdn.beonex.com/en/JavaScript/Reference/Reserved_Words.html)
- Try to use latin characters only, don't do for example: `var präsident`


# The new "let"

 - Cannot be re-defined in the same scope
 - Can be updated
 - Scoped on the block of code in curly braces

## Definition of a variable
```
let age = 50

if (age > 0) {
  let dogYears = Math.round(age / 7);
  console.log(`You are ${ dogYears } dog years old.`)
}
console.log(dogYears);
```


The variable `dogYears` is bound to the scope of the IF code block. The `console.log()` will throw an error, as it cannot access it from the outside.


Be aware of the scope, as you can re-define the variable with let, if it's in a different scope. You should really try to use global variables very rarely.


```
let points = 500;

if (points > 100) {
  let points = 200;
}
console.log("points", points);
```

Returns "500" as the second definition of `points` does only exist in the scope of the IF statement.


# The new "const"

- Cannot be re-defined in the same scope
- Cannot be updated
- Scoped on the block of code in curly braces (equal to "let")

## Definition of a variable
```
const lastname = 'Miller';
lastname = 'Muller'; //Constants cannot be updated, so the following definition would result in an error.

```

Constants that are defined in a global namespace, are written with uppercase letters, as a de-facto standard.
```
const ENTRIES_PER_PAGE = 10;
const MAXIMUM_NUMBER_OF_USERS = 10;
```

Be aware, that the variable cannot be updated by itself, but
properties of objects or the contents of an array can.

```
const user = {
  "name": "Peter",
  "age": 26
}
console.log("user", user);
user.age = 27;

console.log("user's age updated", user);

```

There is a way to freeze objects, so that they cannot be modified
by using the [Object.freeze() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

```
const user2 = {
  "name": "John",
  "age": 30
}

console.log("user 2", user2);

Object.freeze(user2);
user2.age = 31;

console.log("user 2's age not updated, because the object is frozen", user2);
```

## Takeaways:
- Use "const" by default
- Use "let" if you need to update a variable
- Never user "var" in ES6, as it is not needed

# The for of loop

Can loop over any iterable (Array, Object, Map, Set, etc.)


## for
```
const names = ['Peter', 'Paul', 'Sarah', 'Mary']


// The old for loop
// => very odd and ugly

console.log('-------------------------------------')
console.log(' The old for loop')
console.log('-------------------------------------')

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}
```
## forEach
```
// => no "break" and "continue" available

console.log('-------------------------------------')
console.log(' The forEach loop')
console.log('-------------------------------------')

names.forEach((name) => {
  console.log(name)
})

```
## for in
```
// => loops through all array attributes, so also prototypes, etc.

console.log('-------------------------------------')
console.log(' The for in loop')
console.log('-------------------------------------')

Array.prototype.sad = function() { return 'This is so sad'}
names.foo = 'bar'

for (const index in names) {
  console.log(names[index])
}
```

## for of
```

// => can be used with all "iterable" variables (NodeList, Array, Map, etc.)
// => does not care about prototypes and properties
// => "break" and "continue" are available

console.log('-------------------------------------')
console.log(' The for of loop')
console.log('-------------------------------------')

for (const name of names) {
  console.log(name)

  if (name === 'Sarah') {
    break
  }
}
```
The for of loop with getting the index
```
for (const [index, name] of names.entries()) {
  if (name === 'Sarah') {
    continue
  }

  console.log(`${name} has the index ${index}.`)
}

console.log('-------------------------------------')
console.log(' The for of loop on a string')
console.log('-------------------------------------')

```
The for of loop to get all characters of a string
```
const name = 'Peter'  

for (const char of name) {
  console.log(char)
}

console.log('-------------------------------------')
console.log(' The for of loop on a querySelector')
console.log('-------------------------------------')

```
The for of loop to get all characters of a string
```
const paragraphs = document.querySelectorAll('p')

for (const value of paragraphs) {
  console.log(value.innerText)
}
```

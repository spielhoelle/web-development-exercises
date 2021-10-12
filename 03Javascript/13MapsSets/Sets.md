# Sets

## Creating a new Set
Creating a new Set "people"

```
const people = new Set()
console.log(people)
```

## Adding items
Adding items: people.add()

```
people.add('Peter Parker')
people.add('Mary Maroon')
people.add('Simon Silver')

console.log(people)
```

## Getting the "length"
Getting the length: people.size

```
const length = people.size
console.log(`${length} people`)
```

## Deleting items
Deleting items: people.delete()

```
people.delete('Simon Silver')
console.log(people)
```
## Delete all items
Deleting all items: people.clear()

```
people.clear()
console.log(people)
```

## Add them again
Adding some items again: people.add()
```
people.add('Peter Parker')
people.add('Mary Maroon')
people.add('Simon Silver')
console.log(people)
```
## Get values as an Iterator
Getting values as an Iterator: people.values()
```
const peopleIterator = people.values()
console.log(peopleIterator)
```
Walking all entries with peopleIterator.next()
```
console.log(peopleIterator.next())
console.log(peopleIterator.next())
console.log(peopleIterator.next())
```

## Loop without an Iterator
Looping without an Iterator: for of
```
for (const person of people) {
  console.log(person)
}
```
## Creating a new set with items
Creating a new Set of items "students"
```
const students = new Set(['Peter', 'Paul', 'Mary'])
console.log(students)
```
## Check if an item already exists
Check if an item "Peter" exists: students.has()
```
const peterExists = students.has('Peter')
console.log('Is Peter in there?', peterExists)
```
# WeakSets

Creating a new WeakSet "teachers"
```
const teachers = new WeakSet()
console.log(teachers)
```
Adding items: teachers.add()
```
let john = {first: 'John', age: 35}
let alicia = {first: 'Alicica', age: 28}
let simon = {first: 'Simon', age: 32}
let christina = {first: 'Christina', age: 36}
/*
const teachers = new WeakSet([john, alicia])
*/
teachers.add(john)
teachers.add(alicia)
teachers.add(simon)
teachers.add(christina)

console.log(teachers)
```
## Check if an item already exists
Check if the object "simon" exists: teachers.has()
```
const simonExists = teachers.has(simon)
console.log('Is Simon in there?', simonExists)
```
The garbage collector will remove items from a WeakSet that don't exist anymore, because they got deleted.
Removing the object "simon" automatically removes it from the WeakSet

```
simon = null

setTimeout(() => {
  console.log(teachers)           
}, 1000)
```

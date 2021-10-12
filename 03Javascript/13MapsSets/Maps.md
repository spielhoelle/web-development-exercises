# Maps

## Creating a new Set
Creating a new Map "people"
```
const people = new Map()
console.log(people)
```
## Adding items (the key and the value can be literally anything)
Adding items with numeric keys: people.set(key, value)
```
people.set(1, 'Peter Parker')
people.set(2, 'Mary Maroon')
people.set(3, 'Simon Silver')
console.log(people)
```

## Removing all items
Removing all items: people.clear()
```
people.clear()
console.log(people)
```

## Adding items (the key and the value can be literally anything)
Adding items with strings as keys: people.set(key, value)
```
people.set('31c3b4f6397ae9b1dc3f54f81b5e5d19', 'Peter Parker')
people.set('ec683eb93a5ce841f31a8a61c9b6f1ad', 'Mary Maroon')
people.set('b11ea27e37d423bcf3ebf7a0dd2853f9', 'Simon Silver')

console.log(people)
```
## Checking if the key for Peter Parker exists
Check if an item with the key "31c3b4f6397ae9b1dc3f54f81b5e5d19" exists: people.has()
```
const peterExists = people.has('31c3b4f6397ae9b1dc3f54f81b5e5d19')
console.log('Is Peter in there?', peterExists)
```
## Get a specific item by key
Get item with a specific key: people.get()
```
const petersItem = people.get('31c3b4f6397ae9b1dc3f54f81b5e5d19')
console.log(petersItem)
```
## Deleting an item
Deleting an item: people.delete()
```
people.delete('b11ea27e37d423bcf3ebf7a0dd2853f9')
console.log('We deleted Simon.')
console.log(people)
```
## Looping with forEach
Looping with .forEach()
```
people.forEach((value, key) => {
  console.log(key, value)
})
```
## Looping with for of, using destructuring
Looping with for of
```
for (const [key, value] of people) {
  console.log(key, value)
}
```
## We can use a Map() to store metadata about DOM elements, because the
## key can also be an object.
We register a click counter for all paragraphs. The DOM Element is used as key for the Map.
```
const clickCounter = new Map()
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph) => {
  paragraph.appendChild(document.createElement('span'))
  clickCounter.set(paragraph, 0)

  paragraph.addEventListener('click', (e) => {
    clickCounter.set(paragraph, clickCounter.get(paragraph) + 1)
    for (let [element, count] of clickCounter) {
        paragraph.querySelector('span').innerHTML = clickCounter.get(paragraph) + 1
    }    
    console.log(clickCounter)
  })
})

console.log("Click on some <p>s", clickCounter)
```

# The spread operator

The spread operator allows an iterable such as an array
expression or string to be expanded.



## Spreading a string

```
const string = 'Fantastic'
const stringSpreaded = [...string]

console.log('Spreaded string:')
console.log(stringSpreaded)
```

## Combining arrays + adding something in the middle


```
const peter = ['milk', 'eggs', 'apples', 'pizza']
const mary = ['honey', 'bread', 'avocado']
```

Let's try to combine both arrays to a single shopping list and add something in the middle, using the old way.

```
let shoppingList = peter.concat(['toilet paper']).concat(mary)

console.log('The old way:')
console.log(shoppingList)
```

Let's make it nicer, using the spread operator  
```
let shoppingListNew = [...peter, 'toiltet paper', ...mary]

console.log('The new way:')
console.log(shoppingListNew)
```

## Copying an array


Let's see what happens, when assign the array to a new variable

```
const shoppingListCopy = shoppingList
shoppingListCopy[0] = 'Replaced item'

console.log('Copied array:')
console.log(shoppingList)
console.log('Ooops! Let\'s fix that:')
```

Ooooops! That's not what we wanted, right? Now we changed the original array and not only our copy, that we wanted. => The reason is that we created a reference to the original array and not a new copy of it.

So let's fix that to the orignal value

```
shoppingList[0] = 'milk'

// and now we'll use the spread operator to do it right
const shoppingListCopy2 = [...shoppingList]
shoppingListCopy2[0] = 'Replaced item'

console.log(shoppingList)
```


## Spreading into a function


Spreading into Array.push()
```
const superheroes = ['Batman', 'Superman', 'Spider-Man']
const femaleSuperheroes = ['Wonderwoman', 'Catwoman', 'Supergirl']

superheroes.push(...femaleSuperheroes)

console.log('Female superheroes spreaded into push():')
console.log(superheroes)
```

Spreading into our own function
```
function sayHi(first, last) {
  console.log(`Hi ${first} ${last}!`)
}

const myName = ['Peter', 'Parker']
sayHi(...myName)
```

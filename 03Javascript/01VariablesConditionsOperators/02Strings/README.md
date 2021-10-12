[Lesson on Codepen](https://codepen.io/noreading/pen/fc1692384277c3804c34c87350f47904)  
[Exercise on Codepen](https://codepen.io/noreading/pen/35bc1440ff0fd4d051494fb5533443d3)  
[Solution on Codepen](https://codepen.io/noreading/pen/27ba17f81fa5edac3ac211cffacdda4e)

# Template literals - Helping to use variables inside strings.


## The old way to use variables in strings
```
const name = 'Peter'
const age = 35

const sentence = name + ' is ' + age + ' years old.'

console.log('Old way of using variables in strings:')
console.log(sentence)

```

## The new, more elegant way is to use backticks and the ${variable} format.

```
const sentence2 = `${name} is ${age} years old.`

console.log('New way of using variables in strings:')
console.log(sentence2)
```

## You can do calculations or call functions using template literals.

```

const dogSentence = `${name} is ${age / 7} dog years old.`

console.log('Calculations in strings:')
console.log(dogSentence)

const dogSentence2 = `${name} is ${dogYears(age)} dog years old.`

console.log('Calling functions in strings:')
console.log(dogSentence2)

function dogYears (age) {
  return Math.round(age / 7)
}
```

## Multi-line strings the old way

```
const text = 'Hello ' + name + ',\n \
  how are you?\n \
  \n \
  Are you feeling good?\n \
'

console.log('Multi-line strings the old way:')
console.log(text)
```

## Multi-line strings the new way

```
const textNew = `Hello ${name},
  how are you?

  Are you feeling good?
`

console.log('Multi-line strings the new way:')
console.log(textNew)
```

## This is very useful for HTML markup

```
const person = {
  'name': 'Peter',
  'job': 'Web Developer',
  'city': 'Berlin',
  'bio': 'Peter is a really cool guy that loves to code!'
}

const markup = `
  <div class="person">
    <h2>${person.name}</h2>
    <p>
      <span class="job">${person.job}</span>,
      <span class="location">${person.city}</span>
    </p>
    <p class="bio">${person.bio}</span>
  </div>
`

document.write(markup)
```

## We can also nest template literals

```
const dogs = [
  { 'name': 'Taxi', 'age': 2 },
  { 'name': 'Frisbee', 'age': 8 },
  { 'name': 'Gandalf', 'age': 5 }
]

const dogList = `
  ${person.name} has ${dogs.length} dogs:
  <ul class="dogs">
    ${dogs.map((dog) => `
      <li>
        ${dog.name} is ${dog.age * 7}
      </li>
    `).join('')}
  </ul>
`

document.write(dogList)

```

## Having IF statements in template literals by using the ternary operator
```
const songs = [
  { 'title': 'Royals', 'artist': 'Horde' },
  { 'title': 'Wake me up', 'artist': 'Avicii' },
  { 'title': 'Titanium', 'artist': 'David Guetta', 'feature': 'Sia' },
  { 'title': 'Love the way you lie', 'artist': 'Eminem', 'feature': 'Rihanna' }
]

const songList = `
  ${name} love these songs:
  <ul class="songs">
    ${songs.map((song) => `
      <li>
        ${song.title} - ${song.artist}
        ${song.feature ? `(feat. ${song.feature})` : ''}
      </li>
    `).join('')}
  </ul>
`

document.write(songList)
```
## Tagged templates
```
const hobby = {
  'name': 'rafting',
  'since': 10
}

let hobbySentence = `${name}'s hobby is ${hobby.name} and he is doing it for ${hobby.since} years.`

console.log('Hobby sentence without tagging:')
console.log(hobbySentence)

function highlight (strings, ...values) {
  let output = ''

  strings.forEach((string, index) => {
    output += `${string}`

    if (values[index] !== undefined) {
      output += ` <span class="highlight">${values[index]}</span>`
    }
  })

  return output
}

const hobbyHighlighted = highlight`He loves ${hobby.name} and is doing it for ${hobby.since} years.`
document.write(hobbyHighlighted)
```

## New String Methods:
 - startsWith()
 - endsWith()
 - includes()
 - repeat()

---
### `startsWith()`

Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

The optional second parameter is used to set an offset where the search starts.

--------------------------------------------------------------

How egg-numbers work:
`1-DE-1344461`

- 1     = free-range eggs
- DE    = Germany
- 13    = Mecklenburg-Vorpommern
- 44461 = Producer (Farm Siedenbrünzow)

```
const eggMark = '1-DE-1144461'

// Check if the egg is from cage farming
console.log('Is our egg from cage farming?')
console.log(eggMark.startsWith(3))

// Check if the egg is from free-range
console.log('Is our egg from free range?')
console.log(eggMark.startsWith(1))

// Check if the egg is from Germany
console.log('Is our egg from Germany?')
console.log(eggMark.startsWith('DE', 2))
```

---

### `endsWith()`

Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

The optional second parameter can set a limit of characters to take into account for the search.

--------------------------------------------------------------

Course locations:

- BER = Berlin
- DUS = Düsseldorf
- CGN = Cologne

Course types:

- FBW = Förderung beruflicher Weiterbildung
- MAT = Maßnahmen bei einem Träger


```
const course = 'BER-FBW-5'

// Check if the course is number 4
console.log('Is the course number 4?')
console.log(course.endsWith(4))

// Check if the course is number 5
console.log('Is the course number 4?')
console.log(course.endsWith(5))

// Check if the course is a MAT
console.log('Is the course a MAT?')
console.log(course.endsWith('MAT', 7))

// Check if the course is a FBW
console.log('Is the course a FBW?')
console.log(course.endsWith('FBW', 7))

```


### `includes()`

Determines whether one string may be found within another string, returning true or false as appropriate.

The optional second parameter can be used to set the position to start at, when searching.

```
const url = 'http://localhost/foobar/baz?load=1'

// Check if the URL is from a given domain
console.log('Is the URL directing to devugees.org?')
console.log(url.includes('devugees.org'))

console.log('Is the URL directing to localhost?')
console.log(url.includes('localhost'))

// Ignore the protocol
console.log('Is the URL directing to localhost, if we ignore the first 10 characters?')
console.log(url.includes('localhost', 10))

```

### `repeat()`

Constructs and returns a new string which contains the
specified number of copies of the string on which it
was called, concatenated together.

A useful example can be a function to indent text on a terminal or in blocks for code highlighting.

```
var chorus = 'Because I\'m happy. ';

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(27));

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
```

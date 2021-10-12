# Destructuring Objects

### Extract data from an object
const bill = {
  first: 'Bill',
  last: 'Gates',
  country: 'USA',
  city: 'Seattle',
  twitter: '@BillGates'
}

## Old fashioned way to get the data extracted to local variables
```
const first = bill.first
const last = bill.last
const twitter = bill.twitter
```

### Extracting data with destructuring
`const { first, last } = bill`

### Check the new variables
`console.log('first:', first)`  
`console.log('last:', last)`

### Extracting from a deeper level of an object
```
const taylor = {
  first: 'Taylor',
  last: 'Otwell',
  country: 'USA',
  city: 'Little Rock',
  links: {
    social: {
      twitter: 'https://twitter.com/taylorotwell',
      facebook: 'https://www.facebook.com/taylor.otwell'
    },
    web: {
      blog: 'https://medium.com/@taylorotwell'
    }
  }
}
```


### Old fashioned way to get the data extracted to local variables

```
const twitter = taylor.links.social.twitter
const facebook = taylor.links.social.facebook
```


### New way to extract the data
```
const { twitter, facebook } = taylor.links.social

console.log('twitter:', twitter)
console.log('facebook:', facebook)
```

### Renaming variables while destructuring
```
const { twitter: twit, facebook: fb } = taylor.links.social

console.log('twit:',twit)
console.log('fb:', fb)
```

### Using defaults
```
const settings = {
  width: 100,
  color: 'red'
}

const { width: width = 1000, height = 500, color = 'blue', fontSize = '1rem' } = settings

console.log('width:', width)
console.log('height:', height)
console.log('color:', color)
console.log('fontSize:', fontSize)
```

### Try to guess which variables will be created :)
`const { f: firstname = 'John', l: lastname = 'Doe' } = { f: 'Peter' }`

## Destructuring Arrays

`const david = ['David Guetta', '11/07/1967', 'www.davidguetta.com']`

### Old fashioned way to get the data extracted to local variables
```
const name = david[0]
const birthdate = david[1]
const website = david[2]
```

### Extracting data with destructuring from an array
```
const [name, birthdate, website] = david

console.log('name:', name)
console.log('birthdate:', birthdate)
console.log('website:', website)
```

### Extracting data from a string
```
const csvData = 'Peter,Shawn,35'
const [firstName, lastName, age] = csvData.split(',')

console.log('firstName:', firstName)
console.log('lastName:', lastName)
console.log('age:', age)
```

### Extract with rest
```
const team = ['Peter', 'Paul', 'Mary', 'John', 'Sarah', 'Jack', 'Chris']
const [captain, assistant, ...players] = team

console.log('captain:', captain)
console.log('assistant:', assistant)
console.log('players:', players)
```

## Destructuring a parameter object

```
function tipCalc({ total = 0, tax = 0.7, tip = 0.0 } = {}) {
  return total + (tax * total) + (tip * total)
}

console.log(
  tipCalc({ total: 100, tip: 0.1 })
)
```

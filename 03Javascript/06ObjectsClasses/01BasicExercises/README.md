[Exercise on Codepen](https://codepen.io/noreading/pen/pOXRYV?editors=0012)  
[Solution on Codepen](https://codepen.io/noreading/pen/xaoqeE?editors=0012)

# Objects

## EXERCISE 001

Write a function that returns all of the given books that are currently on sale.

```
const books = [
  {
    title: "Dive into HTML5",
    author: "Mark Pilgrim",
    url: "http://diveinto.html5doctor.com/",
    onSale: false
  },
  {
    title: "Understanding Flexbox",
    author: "Ohans Emmanuel",
    url: "https://ohansemmanuel.github.io/uf_download.html",
    onSale: true
  },
  {
    title: "Maintenable CSS",
    author: "Adam Silver",
    url: "https://maintainablecss.com/",
    onSale: false
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    url: "http://eloquentjavascript.net/",
    onSale: true
  }
];

function getBooksOnSale...
```


## EXERCISE 002

Create a function that extends the students objects with the calculated grade, based on their points. You can see the expected result below, as written in "expectedGrades".  

Grades, based on points:

| Grade | Points|
| -- | --|
|A |   90 - 100 |
|B |   70 -  89 |
|C |   50 -  69 |
|D |   30 -  49 |
|E |   10 -  29 |
|F |    0 -   9 |

```
const students = [
  {
    name: "Peter",
    points: 35
  },
  {
    name: "Paul",
    points: 100
  },
  {
    name: "John",
    points: 45
  },
  {
    name: "Mary",
    points: 84
  },
  {
    name: "Jane",
    points: 15
  },
  {
    name: "Jennifer",
    points: 92
  },
  {
    name: "Martin",
    points: 9
  }
];

const expectedGrades = [
  {
    name: "Peter",
    points: 35,
    grade: "D"
  },
  {
    name: "Paul",
    points: 100,
    grade: "A"
  },
  {
    name: "John",
    points: 45,
    grade: "D"
  },
  {
    name: "Mary",
    points: 84,
    grade: "B"
  },
  {
    name: "Jane",
    points: 15,
    grade: "E"
  },
  {
    name: "Jennifer",
    points: 92,
    grade: "A"
  },
  {
    name: "Martin",
    points: 9,
    grade: "F"
  }
];

function calculateGrades...
```

## EXERCISE 003

Create a function to parse a URL. An example of the expected output is written below as "expectedReturn".

```
const url = "https://www.google.de/search?source=hp&q=JavaScript&hl=en#top";

const expectedReturn = {
  hash: "top",
  params: {
    hl: "en",
    q: "JavaScript",
    source: "hp"
  },
  protocol: "https",
  host: "www.google.de",
  query: "?source=hp&q=JavaScript&hl=en",
  source: "https://www.google.de/search?source=hp&q=JavaScript&hl=en#top"
};

function parseUrl...

```

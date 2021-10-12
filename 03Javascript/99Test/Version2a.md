<!--
Teacher Note: To create a version without solutions search and replace `- [x]` by `- [ ]`  
-->

Course: ____________________       Name:  ______________________      Date: ____________

1. Choose all valid ways to add JavaScript to an HTML file.	   (3 pt, 3 * 1.0)

- [ ]  Write JS code inside of a `<javascript></javascript>` tag.
- [x]  Write JS code inside of a `<script></script>` tag.
- [x]  Write JS code inside of event attributes: `onclick="alert('hello')`.
- [ ]  Write JS code inside of script attributes: `script="alert('hello')`.
- [x]  Write JS code inside of a seperate file.

2. What is the No. 1 best place to load JavaScript in HTML?	 (1 pt, 1 * 1.0)

- [ ]  At the beginning of the `<head>` tag
- [ ]  At the end of the `<head>` tag
- [ ]	At the beginning of the `<body>` tag
- [x]  At the end of the `<body>` tag
- [ ]  Inline, as HTML attributes.

3. Choose all valid variable definitions.	   (3 pt, 6 * 0.5)

- [x]  `var x = 100`
- [x]  `var x10 = 1000`
- [x]  `const x = 100`
- [ ]  `v x = 100`
- [x]  `let x = 100`
- [ ]  `const x-100 = 100`
- [ ]  `var 10x = 1000`
- [x]  `let x = [1, 2, 3]`
- [x]  `let x_100 = 100`

5. What is the difference between let and const?	   (1 pt, 1 * 1.0)

- [ ]  let only saves a variable for 60 minutes, const saves the variable until the program stops running
- [x]  let allows us to re-assign a variable, const will throw an error if we try to re-assign the variable.
- [ ]	let is always in the global scope, const uses a code-block based scope.
- [ ]  let works with all data types, const only works with functions.

6. Choose all valid ways to create a String.	   (3 pt, 3 * 1.0)

- [x]  const name = "Julian's Diner";
- [ ]  const name = 'Julian's Diner';
- [x]  const name = `Julian's Diner`;
- [x]  const name = 'Julian\'s Diner';

7. What is the result of the following code?	 (3 pt, 1 * 3.0)

```
const age = "90";

if (age > 100) {
  console.log("You are too old.");
} else if (age < 90) {
  console.log("You are too young.");
} else if (age === 90) {
  console.log("You are a perfect fit!");
} else {
  console.log("You are not young, but not too old.");
}
```

Possible results:

- [ ]  "You are too old."
- [ ]  "You are too young."
- [ ]  "You are a perfect fit!"
- [x]  "You are not young, but not too old."

7. Which messages are logged with the following code?	 (2 pt, 2 * 1.0)

```
const error = 422;

switch (error) {
  case 500:
    console.log("Internal Server Error!");
    break;

  case 413:
  case 422:
    console.log("Input Error!");

  default:
    console.log("Unknown Error!");
    break;
}
```

Possible results:

- [ ]  "Internal Server Error!"
- [x]  "Input Error!."
- [x]  "Unknown Error!"



8. Choose all valid loop definitions.	 (4 pt, 4 * 1.0)

- [x]  for (let i = 0; i < 10; i++)
- [ ]  while (let i = 0; i < 10; i++)
- [ ]  for (let i = 0; i++)
- [x]  while (i < 10)
- [x]  for (let i in contacts)
- [x]  do { … } while (i < 10)

9. Which keyword will make the JavaScript interpreter exit a loop, even when the loop condition is still true?   (2 pt, 1 * 2.0)

- [ ]  return;
- [ ]  stop;
- [x]  break;
- [ ]  continue;

10. Choose all valid function definitions.	(3 pt, 3 * 1.0)
```
let function = sayHello() {
   console.log("Hello!");
 }
```
```
function sayHello() (
   console.log("Hello!");
 )
```
```
function sayHello() {
   console.log("Hello!");
 }
```
```
function sayHello {
   console.log("Hello!");
 }
```

```
const sayHello = () => {
   console.log("Hello!");
 }

function sayHello(name) {
   console.log(`Hello ${name}!`);
}
```

11. Can functions return multiple values? (return 1, 2, 3)        (1 pt, 1 * 1.0)
```
function isItPossible() {
  return 1, 2, 3;
}
```
- [ ]  yes
- [x]  no


12. What is “scope” in JavaScript?	   (2 pt, 1 * 2.0)
- [ ]  Scope is the way you give and get information from functions.
- [x]  Scope is the context in which a variable can be accessed, such as within
 a function, or within the global scope of the entire program.
- [ ]  Scope is the list of functions in the currently running program.
- [ ]  Scope is used to determine when a function returns a value.
13. By each expression below, write the letter that represents   (8 pt, 16 * 0.5)
    its data type.
a = Array,  b = Boolean, f = Function, n = Number,
o = Object, s = String,  u = undefined

- [ n ]  42
- [ s ]  "42"
- [ o ]	{ value: 42 }
- [ f ]  function (value) { return value; }
- [ b ]  true
- [ u ]  hello
- [ s ]  "hello"
- [ b ]  3 + 2 === 5
- [ a ]  [1, 2, 3]
- [ n ]  3 % 3
- [ s ]  ["good", " ", "job"].join(" ")
- [ b ]  true && false
- [ n ]  Math.random()
- [ a ]  "hello".split("")
- [ a ]  ["a", "b", "c"].map(letter => letter + "1")
- [ s ]  3 + "15"
14. Choose the method that adds an item at the end of an array.	   (1 pt, 1 * 1.0)
- [ ]  pop()
- [x]  push()
- [ ]  shift()
- [ ]  unshift()
- [ ]  slice()
- [ ]  splice()



15. Choose the method that returns the first item of an array     (1 pt, 1 * 1.0)
    and also removes it.
- [ ]  pop()
- [ ]  push()
- [x]  shift()
- [ ]  unshift()
- [ ]  slice()
- [ ]  splice()
16. Which message is logged with the following code?	   (2 pt, 1 * 2.0)
const temperatures = [8, 16, 32, 64, 128];
console.log(temperatures.indexOf(32));

Possible results:

- [ ]  0
- [ ]  -1
- [x]  2
- [ ]  3
17. What is the result of the following code?	   (3 pt, 1 * 3.0)
[4,5,6,7].reduce((a, b) => (b > 5 ? a + b : 0), 0)

Possible results:

- [x]  13
- [ ]  18
- [ ]  22
18. Which messages are logged with the following code?	   (2 pt, 1 * 2.0)
const data = [1, 2, 3, 4, 5, 6];

for (let i = 1; i < data.length; i += 2) {
  console.log(data[i]);
}

Possible results:

- [ ]  1, 2, 3, 4, 5, 6
- [ ]  1, 3, 5
- [x]  2, 4, 6
- [ ]  1, 2, 4, 8


19. Which solutions will return the age of John?	 (2 pt, 4 * 0.5)
const john = {
  name: "John Doe",
  job: "Junior Web Developer",
  personal: {
    age: 25
  }
};

const key = "age";


Possible solutions:

- [x]  const age = john.personal[key];
- [x]  const age = john.personal.age;
- [ ]  const age = john[age];
- [ ]  const age = john["age"];
- [x]  const age = john["personal"]["age"];
- [x]  const age = john.personal["age"];
- [ ]  const age = john.age;
20. Which of the solutions will correctly check if an object	(2 pt, 4 * 0.5)
    property exists?

```
const john = {
  name: "John Doe",
  job: "Junior Web Developer",
  personal: {
    age: 25
  }
};
```

Possible solutions:

- [x]  const hasNameProperty = john.hasOwnProperty("name");
- [ ]  const hasNameProperty = john.indexOf("name");
- [x]  const hasNameProperty = (john["name"] !== undefined)
- [x]  const hasNameProperty = ("name" in john)
- [x]  const hasNameProperty = (john.name !== undefined)
- [ ]  const hasNameProperty = john.hasProperty("name");

21. Which of the solutions will correctly destructure the	(4 pt, 2 * 2.0)
    object to get 3 new variables?
```
const john = {
  name: "John Doe",
  job: "Junior Web Developer",
  personal: {
    age: 25
  }
};
```

Possible solutions:

- [ ]  const [name, job, personal] = john;
- [ ]  const ["name", "job", "personal"] = john;
- [x]  const {name, job, personal} = john;
- [ ]  const {"name", "job", "personal"} = john;
- [x]  const {name: hisName, job: hisJob, personal: hisPersonal} = john;
22. Which code will correctly create a new class "Car"?	(2 pt, 2 * 1.0)
- [ ]  class Car = {
         constructor() {
           this.model = "Audi RS6 Quattro"
         }
       }
- [x]  class Car {
         constructor() {
           this.model = "Audi RS6 Quattro"
         }
       }
- [ ]  class Car {
         constructor = () => {
           this.model = "Audi RS6 Quattro"
         }
       }
- [x]  const Car = class {
         constructor() {
           this.model = "Audi RS6 Quattro"
         }
       }
- [ ]  class Car {
         constructor() {
           super();
           this.model = "Audi RS6 Quattro"
         }
       }
23. How are methods called that return / change a class property? (2 pt, 1 * 2.0)
- [ ]  Receiver and Mutator
- [ ]	Obtainer and Modifier
- [x]  Getter and Setter
- [ ]  Catcher and Thrower
24. Which code will correctly create a "static" method?	(1 pt, 1 * 1.0)
- [x]  static toUpperCase(string) {
         return string.toUpperCase();
       }
- [ ]  toUpperCase static (string) {
         return string.toUpperCase();
       }
- [ ]  toUpperCase(string) static {
         return string.toUpperCase();
       }
25. The argument "go" in the code is a...     (multiple answers)  (4 pt, 2 * 2.0)
```
function getData(go) {
  fetch("https://api.github.com/users/noreading/repos")
    .then(response => response.json())
    .then(data => go(data))
};
getData(function(data) {
  console.log(data);
})
```

Possible solutions:

- [ ]  Throwback
- [x]	Function
- [ ]  Caller
- [x]  Callback
- [ ]  Backflip
- [ ]  Promise

26. What does document.querySelectorAll() return? (2 pt, 1 * 2.0)
- [ ]	An object of node elements
- [ ]  An array of node elements
- [x]  A NodeList object

27. Can you use forEach() on a result of `querySelectorAll()`? (1 pt, 1 * 1.0)
- [x]  yes
- [ ]  no
28. Can you chain document.getElementById()?                      (1 pt, 1 * 1.0)

```
const formContainer = document.getElementById("contact-form-container");
const form = formContainer.getElementById("contact-form");
```

- [ ]  yes
- [x]  no
29. Can you chain document.querySelector()?                      (1 pt, 1 * 1.0)
```
const formContainer = document.querySelector("#contact-form-container");
const form = formContainer.querySelector("#contact-form");
```

- [x]  yes
- [ ]  no

30. Which code will correctly add a CSS class `active`?	(2 pt, 2 * 1.0)
```
<div id="nav-element"></div>

const element = document.querySelector("#nav-element");
```

Possible solutions:

- [ ]  `element.class.add("active");`
- [x]  `element.classList.add("active");`
- [ ]  `element.class += "active";`
- [x]  `element.setAttribute("class", element.getAttribute("class") + " `active");
31. Which code will correctly display the new name?	(2 pt, 1 * 2.0)

```
<div id="name-display"></div>

const element = document.querySelector("#name-display");
const name = "<strong>John</strong> Doe";
```

Possible solutions:

- [ ]  element.innerText = name;
- [ ]  element.textContent = name;
- [x]  element.innerHTML = name;
- [ ]  element.text = name;

32. Choose the valid DOM Events. (3 pt, 6 * 0.5)
- [x]  click
- [ ]  form-submit
- [x]  submit
- [x]  change
- [x]  keyup
- [ ]  keypressed
- [ ]  mouseclick
- [x]  mouseover
- [x]  mouseout

33. Which method(s) can be used to attach an event to an element? (2 pt, 1 * 2.0)
- [ ]	`element.attach("click", function(e) {})`
- [ ]	`element.addEvent("click", function(e) {})`
- [x]	`element.addEventListener("click", function(e) {})`
- [ ]	`element.registerEvent("click", function(e) {})`
- [ ]	`element.registerEventListener("click", function(e) {})`

34. How can you get user input from a form element (like input)?  (1 pt, 1 * 1.0)
- [x]	Using the `.value` property of the element.
- [ ]  Using the `.dataset` property of the element.
- [ ]  Using the `.textContent` property of the element.
- [ ]  There is no way, without sending the form to a server.

35. Event.preventDefault() is a method that...                    (1 pt, 1 * 1.0)
- [ ]  stops the event from bubbling up in the DOM.
- [ ]  is needed to attach an event handler to an element.
- [x]  tells the Browser not to do any of the default behaviour that is related
       to the element the event is coming from.
- [ ]  removes an event handler from an element.

36. What is the difference between the 2 properties event.target  (2 pt, 1 * 2.0)
    and event.currentTarget?
- [ ]  `event.target` is the event name that was triggered
       `event.currentTarget` is the element that triggered the event.
- [ ]  `event.target` is the element that triggered the event,
       `event.currentTarget` is the event name that was triggered
- [ ]  `event.target` is the element the event listener is attached to,
       `event.currentTarget` is the element that triggered the event
- [x]  `event.target` is the element that triggered the event,
       `event.currentTarget` is the element the event listener is attached to

37. Why is it better to add an event for multiple elements to     (2 pt, 2 * 1.0)
    their parent element?
- [x]  It is better for the overall performance of a website.
- [ ]  It stops bubbling of events through the whole DOM.
- [x]  It will automatically include all elements, that are created inside the
       parent, even after the initial loading of a website.
- [ ]  It removes the need of callback functions.

38. Error handling with try ... catch is ...                      (2 pt, 2 * 1.0)
- [ ]  catching all types of errors that appear inside of a code block.
- [x]  catching only errors that get thrown as exceptions.
- [ ]  catching all synchronous and asynchronous error.
- [x]  catching only errors that happen synchronous.

39. Own exceptions should extend the class ...                   (2 pt, 1 * 2.0)
- [x]  Error
- [ ]  ErrorException
- [ ]  Exception

40. Which code will correctly create a new Promise?	(4 pt, 2 * 2.0)
- [x]  const myPromise = new Promise((success, error) => {
         success("success");
       })
- [ ]  const myPromise = new Promise()({
         resolve("success");
       })
- [x]  const myPromise = new Promise((resolve, reject) => {
         resolve("success");
       })
- [ ]  const myPromise = new Promise() { return "success"; }

41. Which methods can be used on a Promise object?                (3 pt, 3 * 1.0)
- [ ]  try()
- [x]  catch()
- [ ]  throw()
- [x]  then()
- [ ]  continue()
- [x]  finally()

42. Can you chain multiple calls of .then() or .catch() ?         (1 pt, 1 * 1.0)
- [x]  yes
- [ ]  no

43. Which one is the method to wait for multiple promises at the  (2 pt, 1 * 2.0)
    same time?
- [ ]  wait()
- [ ]  waitAll()
- [x]  all()
- [ ]  collect()
- [ ]  collectAll()
- [ ]  thenAll()

44. What does fetch() return as first argument of a               (2 pt, 1 * 2.0)
    .then callback?
- [ ]  Plain text data
- [ ]  A JSON object
- [ ]  A Request object
- [x]  A Response object

45. Which code(s) contain valid JSON data?                        (2 pt, 2 * 1.0)
- [x]  {
         "movies": [
           {"name": "The Social Network", "year": 2010},
           {"name": "Citizenfour", "year": 2014}
         ],
         "last_updated": "2018-01-12"
       }
- [ ]  {
         movies: [
           {name: "The Social Network", "year": 2010},
           {name: "Citizenfour", "year": 2014}
         ],
         last_updated: 2018-01-12
       }
- [ ]  {
         'movies': [
           {'name': "The Social Network", "year": 2010},
           {'name': "Citizenfour", "year": 2014}
         ]
       }
- [x]  {
         "movies": {
           "1": {"name": "The Social Network", "year": 2010},
           "2": {"name": "Citizenfour", "year": 2014}
         },
         "last_updated": "2018-01-12"
       }
- [ ]  {
         "movies": {
           {"name": "The Social Network", "year": 2010},
           {"name": "Citizenfour", "year": 2014}
         },
         "last_updated": "2018-01-12"
       }




Total: 		100 pts

Grade based on amount of points achieved

| 1 | A | 90-100 | Points |
|---|---|--------|--------|
| 2 | B | 70-89  | Points |
| 3 | C | 50-69  | Points |
| 4 | D | 30-49  | Points |
| 5 | E | 10-29  | Points |
| F | F | 0-9    | Points |

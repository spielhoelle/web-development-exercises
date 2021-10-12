JavaScript Test
[hackmd](https://hackmd.io/7EbAOQsBTB2QSyl6oFYdrg?both)

### 1. Which JavaScript solution changes the content of the paragraph `demo`?

HTML:
```html=
<h1>Hello my friend!</h1>

<p id="demo">
    This is a bad.
</p>
```

Solutions:

- [ ] `document.getElement("p").innerHTML = "This is awesome!";`

- [ ] `document.getElementByName("p").innerHTML = "This is awesome!";`

- [x] `document.getElementById("demo").innerHTML = "This is awesome!";`

- [ ] `#demo.innerHTML = "This is awesome!";`

### 2. Which list items turn green?

HTML:
```html=
<div id="root">
   <ul class="firstlist">
      <li>        
        <ul class="secondlist">
          <li>Number1:</li>
          <li>Number2:</li>
          <li>Number3:</li>
        </ul>
      </li>
      <li>Number1:</li>
      <li>Number2:</li>
      <li>Number3</li>
    </ul>
</div>
```

JavaScript:
```javascript=
document.querySelectorAll('#root > ul > li').forEach(item => {
    item.style.color = "green";
})
```

Green items:
- [x] all
- [ ] none
- [ ] .firstlist li
- [ ] .secondlist li


### 3. What is the purpose of the last two parenthesis in line 3?

```javascript=
(function log(){
   console.log("hey");
})();
```
- [ ] The function runs when the DOM is loaded document ready
- [x] The function runs when the execution hits the lines
- [ ] The function is async

### 4. What is the `result` of the following code?
JavaScript:
```javascript=
const result = 1 + Number("2") + "3";
```

Result:
- [ ] 6
- [x] 33
- [ ] 123


### 5. What is the `result` of the following code?
JavaScript:
```javascript=
const result = [4,5,6,7].reduce((a, b) => (b > 5 ? a + b : 0), 0)
```

Result:
- [x] 13
- [ ] 18
- [ ] 22


### 6. What is the result of the following code?
JavaScript:
```javascript=
"blumentopf".split("").reverse().join("");
```

Result:
- [ ] `["f", "p", "o", "t", "n", "e", "m", "u", "l", "b"]`
- [ ] `["b", "l", "u", "m", "e", "n", "t", "o", "p", "f"]`
- [x] `"fpotnemulb"`
- [ ] `"blumentopf"`


### 7. What is the console output of the following code?
JavaScript:
```javascript=
var array = [1,2,3,4,5,6];

for (var i = 1; i < array.length; i+=2) {
  console.log(array[i])
}
```

Console output:
- [ ] 1, 3, 5
- [x] 2, 4, 6
- [ ] 1 ,2 ,3 ,4 ,5, 6
- [ ] 2, 4, 6, 8, 10, 12

### 8. What happens, when the following code is run?

JavaScript:
```javascript=
while (true) {
    console.log(new Date());
}
```

Your answer:
<br /><br />
<br /><br />

### 9. 	Which solutions return “user hacker245 has id 15” ?

JavaScript:
```javascript=
var object = {
    "user name": "hacker245",
    "id": 15
}
```

Solutions:
- [x]`user ${object["user name"]} has id ${object["id"]}`
- [ ] `user ${object.user.name} has id ${object.id}`
- [ ] `user ${object.userName} has id ${object.id}`
- [x]`user ${object["user name"]} has id ${object.id}`

### 10. What are the purposes of the following function arguments?

JavaScript:
```javascript=
function foo(x = {}, y = 5){
  ...
}
```

Purposes:
- [x] Default values
- [ ] Prevent hoisting
- [x] Fallback that the code is not breaking
- [ ] Explicit return


### 11. What's the difference between `==` and `===`?

<br /><br />
<br /><br />


### 12. Which Array methods add and/or remove elements from an array?

Methods:
- [ ] `.split()`
- [x] `splice()`
- [ ] `join()`
- [x] `unshift()`

### 13. TODO Cross the matching scopes in the table

|                | let | var | const |
|:---------------|:----|:----|:------|
| block scope    |  x  |     |   x   |
| potentially global scope   |     |   x  |       |
| reassignable   |  x  |  x  |       |
| hoisted        |     |  x  |       |


### 14. What is the console output of the following code?

JavaScript:
```javascript=
var a = 6;

function test() {  
    var a = 7;

    function again() {  
        var a = 8;
        console.log(a);
    }

    again();
    console.log(a);
}

test();
console.log(a);
```

Console output:
- [x] `8, 7, 6`
- [ ] `6, 7, 8`
- [ ] `7, 6, 8`
- [ ] `6, 8, 7`

### 15. When you type `$0` in the chrome dev.tools console - what is returned?

- [ ] $0 is not defined
- [x] the current selected DOM node in the elements pane
- [ ] a jQuery object
- [ ] you switch to the elements pane


### 16. When you type `debugger` what happens?
- [ ] logs all variables in the current scope
- [x] the execution is paused at that position as a breakpoint

### 17. How many years will Bob live?

JavaScript:
```javascript=
const bob = {
  age: 18,
  bikes: 1,
  lifeExpectancy: function () {
    return 76 - (this.age * (this.bikes / 2))
  }
}

bob.bikes = 4
const timeToLive = bob.lifeExpectancy()
```

Years to live:

- [ ] undefined
- [x] 40
- [ ] 67
- [ ] 76


### 18. When you run this code in the console, nothing happens. What is missing?

JavaScript:
```javascript=
class Food {
    constructor (name, protein) {
        this.name = name;
        this.protein = protein;
    }

    toString () {
        return `${this.name} | ${this.protein}g P`
    }

    print () {
      console.log( this.toString() );
    }
}
```

#### Your answer:
```=javascript
const lunch = new Food('Eggplant', 19);
lunch print();
```

### 19. Which methods does a Promise have to end it?

- [ ] fulfill
- [x] reject
- [ ] fail
- [ ] done
- [x] resolve

### 20. What will be the value of `result.status`?

JavaScript:
```javascript=
function newTask() {
    var template = {
        status: 'todo',
        taskName: 'new Task',
        date: new Date()
    }

    return Object.assign(template, ...arguments)
}

var result = newTask({status: 'done'},{status: 'test'})
```

result.status:
- [ ] done
- [x] x test
- [ ] todo
- [ ] none, execution would fail

### 21. Rest operator

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function wow (array) {
    let [head, body] = [...array];
    return head + body;
}

console.log(wow(arr))
```

What does this function print to the console?
- [ ] 55
- [ ] NaN
- [ ] 2
- [x] 3

### 22. What is a pure function?

- [ ] a function which does not use variables inside
- [ ] a function that does not have a state
- [x] a function that does not change already existing values, like state


### 23. What is the method to use, if you want to load data in your React component without rendering two times?

- [ ] componentDidMount()
- [ ] componentWillUnmount()
- [ ] componentWillMount()
- [ ] componentDidUpdate()




### 24. This that and those - whats gets logged by each of this functions?

```javascript
document.getElementById('title').addEventListener("click", () =>{
  console.log(this)
})
```
```javascript
document.getElementById('title').addEventListener("click", function(){
  console.log(this)
})
```

### 25. What is a implicit return? Write a example.
Implizit, no return
```javascript
[1,2,3,5,6].map(n => n * 2)
```

Explizit, with return
```javascript
[1,2,3,5,6].map(n => {
    return n * 2
})
```
### 26. Destructurig: What is the output of the following code snippet?

```javascript
let obj = { one: 1 }
let {one: x} = obj
obj.one = undefined;
x = (x + x) * x / x;
console.log(x);
```

- [ ] { one: 1 }
- [ ] { one: null }
- [ ] 1
- [x] 2

### 27. How can we empty an array in JavaScript?  

``` javascript
let arrayList = ['a','b','c','d','e','f'];
```

- [x] arrayList = []
- [x] arrayList.length = 0
- [x] arrayList.splice(0, arrayList.length)

 ### 27. Rewrite the following if else statement as a ternary operator. Please write a code example.

```javascript
if (age >= minimumAge && age <= 120) {
    console.log("Welcome")
} else {
    console.log("Oh, you are not old enough")
}
```

### 28. Rewrite this ES5 syntax to ES6 syntax

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  alert(this.name);
}

let user = new User("John");
user.sayHi();
```

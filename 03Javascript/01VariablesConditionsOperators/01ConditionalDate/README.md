[Exercise on Codepen](https://codepen.io/noreading/pen/PdrrKq?editors=0010)  
[Solution on Codepen](https://codepen.io/noreading/pen/BOggqL?editors=0010)

# Variables and conditions
Depending on the hours (of the current time) and the language (set in the browser), show the following message in the browser:

00:00 - 06:59
"Good night!"
"Gute Nacht!"

07:00 - 11:59
"Good morning!"
"Guten Morgen!"

12:00 - 17:59
"Hello!"
"Guten Tag!"

18:00 - 23:59
"Good evening!"
"Guten Abend!"

On the next lines are some useful variables to get you started. You will learn about all
of the used things LATER, so please take the data that you get for granted in this exercise.
Feel free to add as many languages as you like.


```
const date = new Date();
const hours = date.getHours();
const language = (
window.navigator.userLanguage || window.navigator.language
).substr(0, 2);

// Writing something to the browser window
document.write("Hello!");
```

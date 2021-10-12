var path = require('path');
console.log(`Sometimes you want to run something on every route`);
console.log(`run curl localhost:3000 to see the date logged for EVERY route`);
var express = require('express')
var app = express()

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000)

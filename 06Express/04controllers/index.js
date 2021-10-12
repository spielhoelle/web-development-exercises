var path = require('path');
var bodyParser = require('body-parser');

var express = require('express')
var app = express()

//here we import a controller which handles everything related to Books
var BookController = require('./controllers/bookcontroller');

app.use(express.static('./node_modules'))

//the bodyparser is necessary for receiving POST data from forms to express.
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index')
})

//here we use our controller as a middleware for the POST addbook route
app.post('/addbook', BookController.createBook)

app.listen(3000)
console.log(`open localhost:3000 in your browser, submit the form and come back here to the console to see the form data!`);

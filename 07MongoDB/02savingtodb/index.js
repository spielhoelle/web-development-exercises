const path = require('path');
const bodyParser = require('body-parser');

const express = require('express')
const app = express()

const mongoose = require("mongoose");
mongoose
  .connect( `mongodb://localhost:27017/DCI2`, { useNewUrlParser: true } )
  .catch(error => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`);
    process.exit(1);
});

const BookController = require('./controllers/bookcontroller');

app.use(express.static('./node_modules'))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/addbook', BookController.createBook)

app.listen(3000)
console.log(`open localhost:3000 in your browser, submit the form and check mongodb compass. `);
console.log(`In the DCI2 database you find your Book!`);

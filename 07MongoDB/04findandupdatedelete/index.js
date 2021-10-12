const path = require('path');
const bodyParser = require('body-parser');

const express = require('express')
const app = express()

const mongoose = require("mongoose");
mongoose
  .connect( `mongodb://localhost:27017/DCI4`, { useNewUrlParser: true } )
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

app.get('/', BookController.getBooks)
app.post('/create', BookController.createBook)

app.get('/:id', BookController.getSingleBook)

app.get('/edit/:id', BookController.editBook)
app.post('/edit/:id', BookController.updateBook)

app.get('/delete/:id', BookController.deleteSingleBook)

app.listen(3000)
console.log(`Example of creating, editing and deleting some books`);
console.log(`Database: DCI4`);

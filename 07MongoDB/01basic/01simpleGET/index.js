const path = require('path');
console.log(`Simple mongodb script`);
console.log(`It creates a "DCI" database and a few Books and shows them on localhost:3000`);
const express = require('express')
const mongoose = require("mongoose");
const bookSchema = require("./Book"); 
const Book = mongoose.model("Book", bookSchema); 

mongoose
  .connect( `mongodb://localhost:27017/DCI`, { useNewUrlParser: true } )
  .catch(error => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`);
    process.exit(1);
});

(async () => {
  const books = await Book.find({})
  if(books.length == 0){
    console.log(`No books in database, lets create some`);
    const titles = ["Book #1", "Book #2", "Book #3"] 
    titles.map(t => {
      Book.create({
        title: t,
        content: "Lorem ipsum set dolor amet. Quandum peron salog."
      })
    })
  }
})()

const app = express()
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', async function (req, res) {
  const books = await Book.find({}).exec({})
  console.log(books);
  res.render('index', { books: books })
})

app.listen(3000)

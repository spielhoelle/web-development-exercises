const path = require('path');
console.log(`Simple mongodb script`);
console.log(`It creates a "DCI" database and a few Books and shows them on localhost:3000`);
const express = require('express')
const mongoose = require("mongoose");
const bookSchema = require("./Book"); 
const Book = mongoose.model("Book", bookSchema); 
mongoose
  .connect( `mongodb://localhost:27017/DCI3`, { useNewUrlParser: true } )
  .catch(error => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`);
    process.exit(1);
});

//we create 120 books with a random string as a name, a order 1..120 and a date from within the last two months.
(async () => {
  const books = await Book.find({})
  if(books.length == 0){
    console.log(`No books in database, lets create some`);
    const titles = ["Book #1", "Book #2", "Book #3", "Book #4", "Book #5", "Book #6"] 
    var number = 120
    for(let i = 0; i < number; i++){
      //this is generating a random string for the book title
      var arr = [];
      var str = "A book about Software developement"
      str.split("").map(i => {
        arr.push(str.split("")[Math.floor(Math.random()* str.length)])
      })
      Book.create({
        title: arr.join("").toLowerCase(),
        content: "Lorem ipsum set dolor amet. Quandum peron salog.",
        order: i,
        // 5184000000 / 1000 / 3600 / 24 / 30 = Today - 2 Months
        date: Date.now() - Math.floor(Math.random() * 3600000000) 
      })
    }
  }
})()

const app = express()
app.use(express.static('./node_modules'))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.get('/', async function (req, res) {
  var order = req.query.order;
  var date = req.query.filter ? Date.now() - 1000 * 3600 * 24 * req.query.filter : -1
  const books = await Book
    .where('date').gte(date)
    .sort( order )
    .limit(Number(req.query.limit))
    .exec({})
  res.render('index', { books: books, filter: req.query.filter, limit: req.query.limit, order: req.query.order })
})

app.listen(3000)

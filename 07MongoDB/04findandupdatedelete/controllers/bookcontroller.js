const mongoose = require("mongoose");
const bookSchema = require("../models/Book"); 
const Book = mongoose.model("Book", bookSchema); 

exports.createBook = async (req, res) => {
  Book.create({
    title: req.body.title,
    content: req.body.content, 
    order: req.body.order,
    date: new Date(),
    method: '/create'
  })
  //TODO refactor to a simple redirect('/') and append the alert to res.locals
  const alert = 'Book created!'
  const books = await Book.find();
  const method = '/create'
  res.render('index', {books, method, alert})
}
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  const method = '/create'
  res.render('index', {books, method})
}
exports.getSingleBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('show', {book})
}
exports.editBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  const method = '/edit/' + req.params.id
  res.render('edit', {book, method})
}
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body);
  const method = '/edit/' + req.params.id
  const alert = 'Book updated!'
  res.render('edit', {book, method, alert})
}
exports.deleteSingleBook = async (req, res) => {
  await Book.findByIdAndRemove(req.params.id);
  const method = '/create'
  const alert = 'Book deleted!'
  const books = await Book.find();
  res.render('index', {books, method, alert})
}

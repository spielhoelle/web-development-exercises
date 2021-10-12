const mongoose = require("mongoose");
const bookSchema = require("../models/Book"); 
const Book = mongoose.model("Book", bookSchema); 

exports.createBook = async (req, res) => {
  Book.create({
    title: req.body.title,
    content: req.body.content, 
    order: req.body.order,
    date: new Date()
  })
  console.log(`Book successfully created!`);
  res.redirect('/')
}

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "You must provide a title",
    unique: true
  },
  content: {
    type: String,
    trim: true
  },
  order: {
    type: Number,
    unique: true
  },
  date: {
    type: Date
  },
});

module.exports = bookSchema;

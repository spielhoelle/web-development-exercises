const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  order: {
    type: Number,
  },
  date: {
    type: Number,
  }
});

module.exports = bookSchema;

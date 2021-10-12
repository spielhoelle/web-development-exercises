const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  }
});

module.exports = bookSchema;

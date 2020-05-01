const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  info: {
    type: String,
    unique: true,
  },
  preview: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

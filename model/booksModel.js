const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  isbn: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'A book must have a title.'],
  },
  subtitle: String,
  author: {
    type: String,
    required: [true, 'A book must have a author.'],
  },
  publisher: String,
  published: {
    type: Date,
    select: false,
  },
  pages: {
    type: Number,
    required: [true, 'Number of pages should be provided.'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A book must have a description.'],
  },
  website: {
    type: String,
  },
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
